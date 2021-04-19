import { Injectable } from "@angular/core";

@Injectable() // new Versions of Angular recommends call in both services the Injectable Directive

export class LoggingService {
  logStatusChange(accountStatus){
    console.log('Logging Service says - new account: ' + accountStatus + ' was created');
  };
}