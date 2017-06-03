import { EventPage } from './../pages/event/event';
import { StudentPage } from './../pages/student/student';
import { CardPage } from './../pages/card/card';
import { LoginPage } from './../pages/login/login';
import { MasterPage } from './../pages/master/master';
import { HelloPage } from './../pages/hello/hello';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  // rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;


  count: number = 0;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Hello', component: HelloPage },
      { title: 'Master', component: MasterPage },
      { title: 'Card', component: CardPage },
      { title: 'Student', component: StudentPage },
      { title: 'Event', component: EventPage }
    ];

    this.events.subscribe('on:add', () => {
      this.count++;
    });
    this.events.subscribe('on:minus', () => {
      this.count--;
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
