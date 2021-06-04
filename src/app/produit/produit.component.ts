import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/Produit';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  p: Produit[];

  constructor(private PS: ProduitService, private US: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.US.currentUser === null) {
      this.router.navigate(['']);
    }
    this.PS.getlisteProduit().subscribe(d => this.p = d);
    }
  ajouterProduitPanier(idProduit: string): void{
    this.PS.ajouterProduitAuPanier(idProduit);
  }



}
