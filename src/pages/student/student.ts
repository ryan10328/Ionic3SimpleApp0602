import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Http } from "@angular/http";

import 'rxjs/rx';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  students: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private alertCtrl: AlertController) {

    this.getStudents().subscribe((data) => {
      this.students = data;
    });

  }

  getStudents(): Observable<any> {
    return this.http.get('http://localhost:3000/students')
      .map((response) => {
        return response.json();
      });
  }

  insertStudent(student: any): Observable<any> {
    return this.http.post('http://localhost:3000/students', student)
      .concatMap(() => this.getStudents())
      .do((data) => {
        this.students = data;
      })
  }

  addStudent() {
    let alert = this.alertCtrl.create({
      title: 'Info',
      message: 'Please enter a name',
      inputs: [
        {
          name: 'name',
          placeholder: 'enter a name'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            // 這邊實作 POST 將資料寫回遠端伺服器
            this.insertStudent({ name: data.name }).subscribe();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}
