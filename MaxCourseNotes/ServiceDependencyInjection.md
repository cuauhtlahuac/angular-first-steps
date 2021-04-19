# Notes about Services and Dependency Injections

To see examples please check the [services-start](../services-start/README.md) project.

## Services

### Hierarchical Injector

- It's a way that Angular use to make his own instances
- To create the instance we gonna use the constructor, as we did before, it's only about passing data through the constructor using the key words public or private and Angular (which is the responsible to create and manage our components) do the rest of the work.
- Yo need attach the type, it's not optional.

example:

```ts
  constructor(private LoggingService: LoggingService){}
```

- We need to provide the service: thats means telling Angular how to created. To do that only in the properties of component we need to use provide property, it's an array, and inside we need to put the services that we want.

example: 
```ts
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private LoggingService: LoggingService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.LoggingService.logStatusChange(accountStatus);
  }
}

```