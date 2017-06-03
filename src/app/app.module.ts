import { CheckPage } from './../pages/check/check';
import { LoginPage } from './../pages/login/login';
import { MasterPage } from './../pages/master/master';
import { HelloPage } from './../pages/hello/hello';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelloPage,
    MasterPage,
    LoginPage,
    CheckPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelloPage,
    MasterPage,
    LoginPage,
    CheckPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
