export class LoggingService {
  logStatusChange(accountStatus){
    console.log('Logging Service says - new account: ' + accountStatus + ' was created');
  };
}