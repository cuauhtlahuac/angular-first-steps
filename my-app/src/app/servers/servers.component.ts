import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: [ './servers.component.sass' ],
})
export class ServersComponent implements OnInit {
	allowNewServer: boolean = false;
	serverCreationStatus: string = 'No server was created!';
	serverName: string = 'test server';
	serverCreated: boolean = false;

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	onCreateServer() {
		this.serverCreated = true;
		this.serverCreationStatus = `Server: ${this.serverName} was created`;
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}

	ngOnInit(): void {}
}
