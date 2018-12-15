import { Component, OnInit } from "@angular/core";
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
export class HomePage implements OnInit {
  private user: User = new User();
  public isLoginOk: boolean = false;
  public showVerifyMessage: boolean = false;
  public currentUser: any;

  constructor(public navCtrl: NavController, public loginService: LoginService, public alertCtrl: AlertController, public _eventEmitter: EventEmiterService) {}

  register() {
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.showVerifyMessage = false;
    this.loginService.login(this.user).subscribe(resp=>{
      if (!resp.user.emailVerified) {
        this.showEmailVerificationAlert();
      }
    });
  }


  loginWithProvider(provider:string) {
    this.loginService.loginWithProvider(provider).subscribe(resp => {

      if (!resp.user.emailVerified) {
        this.showEmailVerificationAlert();
      }


    });
  }


  // loginWithFacebook() {
  //   this.loginService.loginWithFacebook().subscribe(resp => {
  //     console.log(resp);
  //     //this.isLoginOk = true;
  //   });
  // }

  // loginWithGoogle() {
  //   this.loginService.loginWithGoogle().subscribe(resp => {
  //     console.log(resp);
  //     //this.isLoginOk = true;
  //   });
  // }


  logout() {
    this.loginService.logout();
  }


  ngOnInit() {
    this._eventEmitter.loginOk.subscribe(data => {
      this.isLoginOk = data;
      console.log(this.isLoginOk);
    });

    this._eventEmitter.showEmailVerificationMessage.subscribe(data => {
      this.showVerifyMessage = data;

      // if (data){
      //   this.showEmailVerificationAlert();
      // }

    });

    this.currentUser = this.loginService.getCurrentUser();
  }


  showEmailVerificationAlert() {
    let alert = this.alertCtrl.create({
      title: "Email Verification Required",
      subTitle: "You will receive an email from Pathshala for email verification, plase check your email and verify to continue.",
      buttons: ["Dismiss"]
    });
    alert.present();
  }
}
