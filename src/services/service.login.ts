import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../models/model.user";
import { Observable } from "rxjs";
import * as firebase from "firebase";

@Injectable()
export class LoginService {
  public isLoginOk: boolean = false;
  public authError: any;

  constructor(public angularFireAuth: AngularFireAuth) {}

  register(user: any): Observable<any> {
    return Observable.create(observer => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(resp => {
        observer.next(resp);
        observer.complete();
      }).catch(resp => {
        observer.next(resp);
        observer.complete();
      });
    });
  }

  loginWithFacebook() {
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    return Observable.create(observer => {
      this.angularFireAuth.auth.signInWithPopup(fbProvider).then(resp => {
        console.log(resp);

        observer.next(resp);
        observer.complete();
      });
    });
  }

  loginWithGoogle() {
    var gglProvider = new firebase.auth.GoogleAuthProvider();

    return Observable.create(observer => {
      this.angularFireAuth.auth.signInWithPopup(gglProvider).then(resp => {
        console.log(resp);

        observer.next(resp);
        observer.complete();
      });
    });
  }

  registerWithFacebook(user: any): Observable<User> {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    return Observable.create(observer => {
      this.angularFireAuth.auth.signInWithPopup(fbProvider).then(resp => {
        user.response = resp;
      });

      observer.next(user);
      observer.complete();
    });
  }

  login(user) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        this.authError = err;
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(resp => {
      console.log(resp);
    });
  }

  getCurrentUser() {
    return this.angularFireAuth.auth.currentUser;
  }
}
