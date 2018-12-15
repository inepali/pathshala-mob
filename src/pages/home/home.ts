import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";

import { User } from "../../models/model.user";
import { RegisterPage } from "../register/register";
import { LoginService } from "../../services/service.login";
import { EventEmiterService } from "../../services/service.event.emmiter";
//import { Subscription } from "rxjs";
//import * as firebase from 'firebase/app';
//import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  private user: User = new User();
  public isLoginOk: boolean = false;
  public showVerifyMessage: boolean = false;
  public currentUser: any;


  constructor(public navCtrl: NavController, public loginService: LoginService, public alertCtrl: AlertController, public _eventEmitter: EventEmiterService
    ) {
    // this.isLoginOk = this.loginService.isLoginOk;
    this._eventEmitter.loginOk.subscribe(data => {
      console.log(data);
      this.isLoginOk = data;
    });

    this._eventEmitter.showEmailVerificationMessage.subscribe(data => {
      this.showVerifyMessage = data;
    });

    this.currentUser = this.loginService.getCurrentUser()

  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.showVerifyMessage = false;
    this.loginService.login(this.user);
  }

  loginWithFacebook() {
    this.loginService.loginWithFacebook().subscribe(resp => {
      console.log(resp);
     //this.isLoginOk = true;
    });
  }


  loginWithGoogle() {
    this.loginService.loginWithGoogle().subscribe(resp => {
      console.log(resp);
      //this.isLoginOk = true;
    });
  }

  // this.angularFireAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(resp => {
  //   console.log(resp);
  // }).catch(err => {
  //   this.authError = err;
  //   this.showAlert();
  // });

  logout() {
    this.loginService.logout();
  }

  // showAlert() {
  //   const alert = this.alertCtrl.create({
  //     title: "Invalid Login",
  //     subTitle: this.authError.message,
  //     buttons: ["OK"]
  //   });
  //   alert.present();
  // }


}
