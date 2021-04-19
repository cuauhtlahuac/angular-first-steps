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

### Store and Manage Data

- We can use Service to Manage and store data.
- We can Inject services into services
- We can Inject services widely in the application.
- We can propagate the instance of services trough the children components.
- Important! If call the same instance in a parent component and children, it will be overwriting the data of his children, is the cause of the update data bug that we that we got
- Each component where we inject the service will create a new instance of that injection.
- **To fix** the bug we only need to delete the services from the provider where we dont want to create new instances, only use the instance.
- AppModule is the highest level where we can put some service
- In Services when Angular trough this error: *Can't resolve all parameters for AccountService: (?)*, means we need to add a metadata when we call a Service into a Service. It can be fixed calling **@Injectable()** Directive. One important detail is that we must call outside of the class as the others Directives.
- New Versions of Angular recommends call in both services the Injectable Directive even if it do the injection or it's received the injection