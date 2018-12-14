import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { User } from "../../models/model.user";
import { LoginService } from "../../services/service.login";


@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  public appUser: User = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }

  register() {
    this.loginService.register(this.appUser).subscribe((reponse) => {
      console.log(reponse);
    })
  }

  registerWithFacebook(){

  }

  registerWithGoogle(){

  }
}
