import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserApi} from "../../shared/services/custom/User";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private userApi: UserApi) {
    
  }

  login() {
    this.userApi.login({
      username: 'admin',
      password: 'admin'
    }, 'user', true).subscribe((user) => {
      console.log(user);
    });
  }

  getUsers() {
    this.userApi.find({}).subscribe((users) => {
      console.log("Users: ", users)
    }, err => {
      console.error(err);
    })
  }

}
