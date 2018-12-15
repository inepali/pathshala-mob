// Ionic, Angular, Cordova
import { Component, ViewChild } from "@angular/core";
import { Tabs, AlertController } from "ionic-angular";

// Services
import { AngularFireAuth } from "@angular/fire/auth";
import { EventEmiterService } from "../../services/service.event.emmiter";
import { StorageService } from "../../services/service.localStorage";

//Pages
//import { AboutPage } from '../about/about';
import { HomePage } from "../home/home";
import { StudentPage } from "../student/student";
import { SettingsPage } from "../settings/settings";
import { InboxPage } from "../inbox/inbox";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  //tab2Root = AboutPage;
  tab3Root = InboxPage;
  tab4Root = SettingsPage;
  tab5Root = StudentPage;

  isAdmin: boolean = true;
  currentUser: any;

  @ViewChild("myTabs") tabRef: Tabs;

  constructor(private angularFireAuth: AngularFireAuth, public _eventEmiter: EventEmiterService, public alertCtrl: AlertController, public storageService : StorageService) {

    this.angularFireAuth.auth.onAuthStateChanged(function(user) {

      if (user) {
        console.log("User logged in information found and login is valid");

        if (!user.emailVerified) {
          console.log("email is not verified send verification email and verified");
          _eventEmiter.updateShowEmailVerificationMessage(true);
          angularFireAuth.auth.currentUser.sendEmailVerification();
          angularFireAuth.auth.signOut();
        } else {
          _eventEmiter.updateLoginOk(true);
        }
      } else {
        console.log("User logged in information not found or login is invalid");
        _eventEmiter.updateLoginOk(false);
      }
    });
  }

}
