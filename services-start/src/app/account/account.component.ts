import { Component, Input } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};

  @Input() id: number;

  constructor(private AccountService: AccountService){}

  onSetTo(status: string) {
    this.AccountService.updateStatus(this.id, status)
  }
}
