import { Component, Input } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: [ './account.component.css' ],
})
export class AccountComponent {
	@Input() account: { name: string; status: string };
	@Input() id: number;

	constructor(
		private AccountService: AccountService,
		private LoggingService: LoggingService,
	) {}

	onSetTo(status: string) {
		this.AccountService.updateStatus(this.id, status);
	}
}
