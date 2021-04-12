import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: [ './servers.component.sass' ],
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
  serverCreationStatus = 'No server was created!';
	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

  onCreateServer(){
    this.serverCreationStatus = 'Server was created'
  }

	ngOnInit(): void {}
}
