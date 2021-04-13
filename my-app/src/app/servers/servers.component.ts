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
	servers: Array<string> = ['test-server 1', 'test-server 2'];

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	onCreateServer() {
		this.serverCreated = true;
		this.serverCreationStatus = `Server: ${this.serverName} was created`;
		this.servers.push(this.serverName);
		this.onServerNameReset();
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}

	onServerNameReset() {
		this.serverName = '';
	}

	ngOnInit(): void {}
}
