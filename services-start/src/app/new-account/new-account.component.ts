import { Component } from '@angular/core';

import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: [ './new-account.component.css' ],
})
export class NewAccountComponent {
	constructor(
		private AccountService: AccountService,
		private LoggingService: LoggingService,
	) {
		this.AccountService.statusUpdated.subscribe((status: string) =>
			alert('status: ' + status),
		);
	}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.AccountService.addAccount(accountName, accountStatus);
	}
}
