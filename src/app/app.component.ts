import { Component } from '@angular/core';
import {UserService} from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetang';
  constructor(private US: UserService){}
  Loggedin(): boolean{
    return this.US.currentUser !== null ;
  }
  logUserOut(): void{
    this.US.logUserOut() ;
  }
}
