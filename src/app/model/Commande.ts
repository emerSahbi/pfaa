import {Produit} from './Produit';

export class Commande{
  id: number;
   listeProduit: Produit[];
   listeQuantite: number[];
  nom: string;
   prenom: string;
   numTel: number;
   ville: string;
   adresse: string;
   info: string;

  constructor() {
  }
}
