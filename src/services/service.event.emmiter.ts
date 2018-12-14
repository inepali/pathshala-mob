import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class EventEmiterService  {

  loginOk = new EventEmitter();

  constructor() {}

  updateLoginOk (data : boolean){
    this.loginOk.emit(data);
  }

}
