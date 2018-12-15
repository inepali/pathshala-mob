import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "@angular/fire";
//import { AngularFireDatabaseModule} from "@angular/fire/database";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFireAuth} from "@angular/fire/auth";
import { FIREBASE_CONFIG } from "./firebase.config";


import { SettingsPage } from '../pages/settings/settings';
import { RegisterPage } from '../pages/register/register';
import { LoginService } from '../services/service.login';
import { EventEmiterService } from '../services/service.event.emmiter';
import { StudentPage } from '../pages/student/student';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StudentPage,
    SettingsPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    //AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    StudentPage,
    HomePage,
    SettingsPage,
    RegisterPage,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    LoginService,
    EventEmiterService
  ]
})
export class AppModule {}
