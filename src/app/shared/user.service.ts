import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USurl = 'http://127.0.0.1:3000/User';
  currentUser: User  = null ;
  constructor(private http: HttpClient , private router: Router) { }

  LoginU(login: string, password: string): void{
    this.http.get<User>(this.USurl + '?login=' + login + '&password=' + password).subscribe(
      (data) => { if (data[0].login === login && data[0].password === password)
      {this.currentUser = data[0]; this.router.navigate(['produit']); } });
  }
  logUserOut(): void{
    this.currentUser = null ;
    this.router.navigate(['']);
  }
}
