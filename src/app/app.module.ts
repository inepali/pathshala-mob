// Ionic, angular, cordova
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";


// AngularFire
import { AngularFireModule } from "@angular/fire";
//import { AngularFireDatabaseModule} from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import { FIREBASE_CONFIG } from "./firebase.config";

// Services
import { EventEmiterService } from "../services/service.event.emmiter";
import { LoginService } from "../services/service.login";
import { StorageService } from "../services/service.localStorage";

// Pages, App
import { MyApp } from "./app.component";
import { AboutPage } from "../pages/about/about";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { SettingsPage } from "../pages/settings/settings";
import { RegisterPage } from "../pages/register/register";
import { StudentPage } from "../pages/student/student";
import { InboxPage } from "../pages/inbox/inbox";



@NgModule({
  declarations: [MyApp, AboutPage, InboxPage, HomePage, StudentPage, SettingsPage, RegisterPage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    //AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, InboxPage, StudentPage, HomePage, SettingsPage, RegisterPage, TabsPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }, AngularFireAuth, LoginService, EventEmiterService, StorageService]
})
export class AppModule {}
