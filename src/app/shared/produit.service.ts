import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../model/Produit';
import {Observable} from 'rxjs';
import {PanierService} from './panier.service';
import {Panier} from '../model/Panier';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient, private PNS: PanierService, private US: UserService) { }
  getlisteProduit()
  {
    return this.http.get<Produit[]>('http://localhost:3000/Produit');
  }
  createProduct(p){
    const productUrl = 'http://localhost:3000/Produit';

    return this.http.post<Produit>(productUrl, p);
  }
  viewProduct(id): Observable<Produit>{
    const productUrl = 'http://localhost:3000/Produit/' + id;
    return this.http.get<Produit>(productUrl );
  }
  ajouterProduitAuPanier(idProduit: string): void{
    let p = new Panier();
    this.PNS.getPanier(this.US.currentUser.id).subscribe(x => {
      p = x ;
      let i = p.listeProduit.findIndex(y => y.id === idProduit) ;
      if(i > -1){
        p.listeQuantite[p.listeProduit.findIndex(y => y.id === idProduit)] += 1 ;
        this.PNS.updatePanier(p.id, p).subscribe();
      }
      else {
        this.viewProduct(idProduit).subscribe( x => {
          p.listeProduit.push(x);
          p.listeQuantite.push(1);
          this.PNS.updatePanier(p.id, p).subscribe();
        });
      }
    });
  }
}
