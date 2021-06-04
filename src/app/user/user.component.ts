import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  login = 'emer@emer.tn' ;
  password = '123456' ;
  showError = false ;
  constructor(private US: UserService) { }

  ngOnInit(): void {
  }
  LoginU(email: string, password: string): void{
    this.US.LoginU(this.login, this.password);
    this.showError = true ;
  }

}
