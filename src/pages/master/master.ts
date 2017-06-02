import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class MasterPage {
  name: string;
  age: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHome() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    this.age = this.navParams.get('age');
    
    console.log('ionViewDidLoad MasterPage');
  }

}
