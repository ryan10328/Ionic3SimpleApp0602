import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  format: string;
  text: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcode: BarcodeScanner) {
  }

  scan() {
    this.barcode.scan().then((data) => {
      if (!data.cancelled) {
        this.format = data.format;
        this.text = data.text;
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

}
