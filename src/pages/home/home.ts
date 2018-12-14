import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { User } from '../../models/model.user';
import { RegisterPage } from '../register/register';
import { LoginService } from '../../services/service.login';
import { EventEmiterService } from '../../services/service.event.emmiter';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private authError: any;
  private user : User = new User();
  public  isLoginOk: boolean = false;

  constructor(public navCtrl: NavController, public loginService: LoginService, public alertCtrl: AlertController,
    private _eventEmitter : EventEmiterService,
    private angularFireAuth: AngularFireAuth) {
   // this.isLoginOk = this.loginService.isLoginOk;
   this._eventEmitter.loginOk.subscribe(data => {
     console.log(data);
     this.isLoginOk = data;
   });
  }

  register(){

    this.navCtrl.push(RegisterPage);

  }

  login(){

    this.loginService.login(this.user);


    }


    loginWithFacebook()
    {
      var fbProvider = new firebase.auth.FacebookAuthProvider();

      this.angularFireAuth.auth.signInWithPopup(fbProvider).then(resp =>{
        console.log(resp);
      });

    }

      // this.angularFireAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(resp => {
      //   console.log(resp);
      // }).catch(err => {
      //   this.authError = err;
      //   this.showAlert();
      // });


  logout(){
    this.loginService.logout();
  }


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Invalid Login',
      subTitle: this.authError.message,
      buttons: ['OK']
    });
    alert.present();
  }

  ngOnInit(){
    this.isLoginOk = this.loginService.isLoginOk;
  }

}
