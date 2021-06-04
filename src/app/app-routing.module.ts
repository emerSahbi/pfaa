import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailproduitComponent} from './detailproduit/detailproduit.component';
import {ProduitComponent} from './produit/produit.component';
import {CommandeComponent} from './commande/commande.component';
import {UserComponent} from './user/user.component';
import {PanierComponent} from './panier/panier.component';


const routes: Routes = [
  { path: 'produit/:id', component: DetailproduitComponent},
  { path: 'produit', component: ProduitComponent},
  { path: 'commande', component: CommandeComponent},
  { path: 'panier', component: PanierComponent},
  { path: '' , component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

