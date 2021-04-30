import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//shortcut to avoid have to be declared in module providers
@Injectable({ providedIn: 'root' })

export class UserService {
	activatedEmitter = new Subject<boolean>(); // His declaration pretty similar to emitter
}
