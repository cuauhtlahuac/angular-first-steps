import { Component } from '@angular/core';

import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [AccountService],
})
export class NewAccountComponent {

  constructor(private AccountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.AccountService.addAccount(accountName, accountStatus);
  }
}
