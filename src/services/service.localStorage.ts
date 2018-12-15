import { Injectable } from "@angular/core";


@Injectable()
export class StorageService {

  constructor() {}

  get(key){
    //return this.persistenceService.get(key);
  }

  set(key, value){
    //this.persistenceService.set(key, value);
  }

  remove(key){
    //this.persistenceService.remove(key);
  }

  removeAll(){
    //this.persistenceService.removeAll();
  }

  clean(){
    //this.persistenceService.clean();
  }
}
