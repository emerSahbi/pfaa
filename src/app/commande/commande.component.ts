import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Commande} from '../model/Commande';
import {CommandeService} from '../shared/commande.service';
import {PanierService} from '../shared/panier.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';
import {Panier} from '../model/Panier';
import {Produit} from '../model/Produit';
import {ProduitService} from '../shared/produit.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { jsPDF } from "jspdf";



@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

 commande = new Commande();
 p = new Panier();
 product = new Produit();
 CommandeForm: FormGroup;

  constructor(private CS: CommandeService, private PNS: PanierService , private  PS: ProduitService , private US: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.US.currentUser === null ){
      this.router.navigate(['']);
    }
    this.PNS.getPanier(this.US.currentUser.id).subscribe( x => {this.p.listeProduit = x.listeProduit; console.log(this.p.listeProduit); });
    this.CommandeForm = new FormGroup({
      adresse: new FormControl(this.commande?.adresse, [Validators.required, Validators.minLength(3), Validators.maxLength(90)]),
      numtel: new FormControl(this.commande?.numTel, [Validators.required, Validators.minLength(8)]),
      nom: new FormControl(this.commande?.nom, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      ville: new FormControl(this.commande?.ville, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      info: new FormControl(this.commande?.info, [Validators.maxLength(50)]),
      prenom: new FormControl(this.commande?.prenom, [Validators.required, Validators.min(100000), Validators.max(10000000000000)])
    });
  }
  AjoutCommande(){
    this.PNS.getPanier(this.US.currentUser.id).subscribe(x => {
      this.commande.listeProduit = x.listeProduit ;
      this.commande.listeQuantite = x.listeQuantite;
      this.CS.addCommande(this.commande).subscribe(y => { console.log(y); } );
    } );

  }

  /*@ViewChild('card') card: ElementRef;

  public print(): void {

    const doc = new jspdf();

    const content = this.card.nativeElement;

    const margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
    };
    console.log(doc);
    //   setTimeout(() => { ** REMOVE **
    doc.fromHTML(content.innerHTML, margins.left, margins.top, {}, function () {
      //  doc.output('export.pdf'); ** REMOVE **
      }, margins);
    //   }, 100); ** REMOVE **
    doc.save('card.pdf');
  }
*/
}
