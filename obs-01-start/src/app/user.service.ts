import { EventEmitter, Injectable } from '@angular/core';

//shortcut to avoid have to be declared in module providers
@Injectable({ providedIn: 'root' })

export class UserService {
	activatedEmitter = new EventEmitter<boolean>();
}
