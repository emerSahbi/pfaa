import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../model/Produit';
import {Commande} from '../model/Commande';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  c: Commande ;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) { }
  getlisteCommande()
  {
    return this.http.get<Commande[]>('http://localhost:3000/Commande');
  }
  viewCommande(id): Observable<Commande>{
    const CommandeURL = 'http://localhost:3000/Commande' + '/' + id;
    return this.http.get<Commande>(CommandeURL );
  }
  addCommande(cmd: Commande){
    return this.http.post<Commande>('http://localhost:3000/Commande', cmd);
  }
  deleteCommande(id){
    return this.http.delete<Commande>('http://localhost:3000/Commande/' + id);
  }
  UpdateCommande(c){
    return this.http.put<Commande>('http://localhost:3000/Commande/' + this.c.id , this.c);
  }
}

