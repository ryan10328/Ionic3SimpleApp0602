import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events) {
  }

  add() {
    this.events.publish('on:add');
  }

  minus() {
    this.events.publish('on:minus');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
