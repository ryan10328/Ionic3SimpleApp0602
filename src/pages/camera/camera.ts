import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  imageSrc: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
  }

  takePhoto() {
    let options = <CameraOptions>{
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options)
      .then((imageData) => {
        if (imageData) {
          this.imageSrc = 'data:image/jpeg;base64,' + imageData;
        }
      }, (error) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
