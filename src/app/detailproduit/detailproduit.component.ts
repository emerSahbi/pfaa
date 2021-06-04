import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/Produit';
import {ActivatedRoute} from '@angular/router';
import {ProduitService} from '../shared/produit.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  id: number;
  P: Produit;
  private serviceRoute = new ActivatedRoute();

  constructor(private service: ActivatedRoute, private PS: ProduitService) {
  }

  ngOnInit(): void {
    this.service.params.subscribe(data => {
      this.id = data.id ; this.PS.viewProduct(this.id).subscribe(res => {this.P = res; console.log(this.P); }  );
       } );

    }
  ajouterProduitPanier(idProduit: string): void{
    this.PS.ajouterProduitAuPanier(idProduit);
  }
  enstock(): boolean{
    return   this.P.disponibilite !== false ;
  }
  }

