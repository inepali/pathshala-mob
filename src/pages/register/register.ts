import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { User } from "../../models/model.user";
import { LoginService } from "../../services/service.login";
import { EventEmiterService } from "../../services/service.event.emmiter";

@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  public errMessage: any;
  public appUser: User = new User();
  public passwordRetype: string;
  public showMessage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService, public _eventEmitter: EventEmiterService) {
    this._eventEmitter.showEmailVerificationMessage.subscribe(data => {
      this.showMessage = data;
    });
  }


  register() {
    this.loginService.register(this.appUser).subscribe(response => {
      console.log(response);
      if (response.code === "auth/email-already-in-use")
      {
          this.errMessage = response.message;
      }
    });
  }

  continue(){
    this.navCtrl.pop();
  }
}
