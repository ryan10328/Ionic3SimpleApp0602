import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {


  @ViewChild('f') frm: NgForm;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submit(form) {
    // 這邊可以檢查表單之後再做儲存的動作
  }

  ionViewCanLeave() {
    return this.frm.valid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
  }
}
