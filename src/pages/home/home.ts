import { CheckPage } from './../check/check';
import { ListPage } from './../list/list';
import { MasterPage } from './../master/master';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private storage: Storage) {
  }

  showAlert() {
    // let alert = this.alertCtrl.create({
    //   title: 'Hello',
    //   subTitle: 'Hello, Subtitle',
    //   message: 'Hello, Ionic3'
    // });
    // alert.present();
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  goMaster() {
    this.navCtrl.push(MasterPage, { name: 'Ryan', age: 28 });
  }

  setRootPage() {
    this.navCtrl.setRoot(ListPage);
  }

  goCheck() {
    this.navCtrl.push(CheckPage);
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',
      duration: 1500
    });

    loading.present();
  }

  // ionViewCanEnter() {
  //   return this.storage.get('userInfo').then((data) => {
  //      return data.account == '1234' && data.password == '1234';
  //   });
  //   // let account = this.navParams.get('account');
  //   // let password = this.navParams.get('password');
  //   // return account == '1234' && password == '1234';
  // }

}
