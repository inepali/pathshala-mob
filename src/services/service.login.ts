import { Injectable, Input } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../models/model.user";
import { Observable  } from "rxjs";
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
  //public currentUser: Subject<User>;

  private authError: any;
  public isLoginOk: boolean = false;

  constructor(public angularFireAuth: AngularFireAuth) {
      }


  register(user : any) : Observable<User> {

    return Observable.create(observer => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(resp =>{
        user.response = resp;
      });

      observer.next(user);
      observer.complete();
    })
  }

  registerWithFacebook(user: any) : Observable<User> {

    var fbProvider = new firebase.auth.FacebookAuthProvider();
    return Observable.create(observer => {
      this.angularFireAuth.auth.signInWithPopup(fbProvider).then(resp =>{
        user.response = resp;
      });

      observer.next(user);
      observer.complete();
    })
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
}
