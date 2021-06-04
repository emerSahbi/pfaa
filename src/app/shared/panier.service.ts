import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Panier} from '../model/Panier';
import {Produit} from '../model/Produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panierUrl = 'http://127.0.0.1:3000/Panier' ;

  constructor(private http: HttpClient) { }
  ajoutProduitPanier(idPanier: number, p: Produit){

  }
  getPanier(id: number): Observable<Panier>{
    return this.http.get<Panier>(this.panierUrl + '/' + id);
  }
  supprimerProduitDuPanier(idPanier: number, idProduit: string): Observable<Panier>
  {
    return this.http.get<Panier>(this.panierUrl + '/' + idPanier);
  }
  updatePanier(idPanier: number, nouveauPanier: Panier): Observable<Panier>{
    return this.http.put<Panier>(this.panierUrl + '/' + idPanier, nouveauPanier);
  }
}
