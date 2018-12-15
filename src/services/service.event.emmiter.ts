import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class EventEmiterService  {

  loginOk = new EventEmitter();
  showEmailVerificationMessage = new EventEmitter()

  constructor() {}

  updateLoginOk (data : boolean){
    this.loginOk.emit(data);
  }

  updateShowEmailVerificationMessage(data: boolean){
    this.showEmailVerificationMessage.emit(data);
  }

}
