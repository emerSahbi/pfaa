import { Component, OnInit } from '@angular/core';
import {PanierService} from '../shared/panier.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';
import {Panier} from '../model/Panier';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier = new Panier();

  constructor(private router: Router, private US: UserService, private PNS: PanierService) { }

  ngOnInit(): void {
    if (this.US.currentUser === null) {
      this.router.navigate(['']);
    }
    this.PNS.getPanier(this.US.currentUser.id).subscribe( x => {this.panier = x; console.log(this.panier);});
  }
  getQuantite(idProduit: string): number{
    return this.panier.listeProduit.findIndex(x =>  x.id === idProduit);
  }
  supprimerProduit(idProduit: string): void{
    let p = new Panier() ;
    this.PNS.supprimerProduitDuPanier(this.US.currentUser.id, idProduit).subscribe( x =>
    {
      p = x ;
      p.listeQuantite.splice(p.listeProduit.findIndex( y => y.id === idProduit), 1);
      p.listeProduit.splice(p.listeProduit.findIndex( y => y.id === idProduit), 1);
      this.PNS.updatePanier(this.US.currentUser.id, p).subscribe(z => this.panier = z);
    });
  }
  updateQuantite(idProduit: string, nvQuantite: number): void{
    let p = new Panier();
    this.PNS.getPanier(this.US.currentUser.id).subscribe(x =>
    {
      p = x ;
      if (nvQuantite >= 1) {
        p.listeQuantite[p.listeProduit.findIndex(y => y.id === idProduit)] = nvQuantite;
        this.PNS.updatePanier(p.id, p).subscribe(y => this.panier = y);
      }
    });
  }
}
