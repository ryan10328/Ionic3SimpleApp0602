import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Http } from "@angular/http";
import 'rxjs/rx';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  
  students: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http) {

    this.http.get('http://localhost:3000/students')
      .map((response) => {
        return response.json();
      }).subscribe((data) => {
        this.students = data;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}
