import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.navCtrl.push(HomePage, { account: this.account, password: this.password });
    // this.navCtrl.setRoot(HomePage, { account: this.account, password: this.password })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
