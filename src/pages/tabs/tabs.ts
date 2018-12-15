import { Component, ViewChild } from '@angular/core';
import { Tabs} from "ionic-angular";

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StudentPage } from '../student/student';
import { SettingsPage } from '../settings/settings';

import { AngularFireAuth } from "@angular/fire/auth";
//import { LoginService } from '../../services/service.login';
import { EventEmiterService } from '../../services/service.event.emmiter';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SettingsPage;
  tab5Root = StudentPage;

  isAdmin: boolean = true;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public angularFireAuth : AngularFireAuth, public _eventEmiter: EventEmiterService) {
    this.angularFireAuth.auth.onAuthStateChanged(function(user) {
      if (user){
          console.log('User logged in information found and login is valid');


          if (!user.emailVerified)
          {
             console.log("email is not verified send verification email and verified");
             _eventEmiter.updateShowEmailVerificationMessage(true);
             angularFireAuth.auth.currentUser.sendEmailVerification();
             angularFireAuth.auth.signOut();
          }
        _eventEmiter.updateLoginOk(true);

      } else {
          console.log('User logged in information not found or login is invalid')
        _eventEmiter.updateLoginOk(false);
      }
    });
  }
}
