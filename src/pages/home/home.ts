import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserApi} from "../../shared/sdk/services/custom/User";
import {ProjectApi} from "../../shared/sdk/services/custom/Project";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private userApi: UserApi, private projectApi: ProjectApi) {
    
  }

  login() {
    this.userApi.login({
      username: 'admin',
      password: 'admin'
    }, null, true).subscribe((user) => {
      console.log(user);
    });
  }

  getProjects() {
    this.projectApi.find({}).subscribe((projects) => {
      console.log("Projects: ", projects)
    }, err => {
      console.error(err);
    })
  }

}
