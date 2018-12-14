import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs} from "ionic-angular";

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { AngularFireAuth } from "@angular/fire/auth";
import { SettingsPage } from '../settings/settings';
import { LoginService } from '../../services/service.login';
import { EventEmiterService } from '../../services/service.event.emmiter';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SettingsPage;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor(private angularFireAuth : AngularFireAuth, private nav : NavController, private _eventEmiter: EventEmiterService) {
    this.angularFireAuth.auth.onAuthStateChanged(function(user) {
      if (user){
          console.log('user is logged in already');
        _eventEmiter.updateLoginOk(true);
      } else {
          console.log('user is not logged in')
         _eventEmiter.updateLoginOk(false);
      }
    });
  }
}
