# Angular Routing Notes

### Setting up and Loading Routes

- Better place to config is App Module.
- Save an array of objects:
   ```ts
   [{ path: 'something', component: SomeComponent }]
   ```
- Isn't necessary to put the slash in path
- We need to add RouterModule in imports, something like:

```ts
@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppModule { }
```
- In the template we gonna use router-outlet directive to indicate the initial point of the routing

```html
  <router-outlet></router-outlet>
```

### Navigating with Router Links

- To avoid refresh of the entire page we can use the routerLink directives, we can use a string or an array with this directive but between []:

```html
  <a routerLink="/servers">Servers</a>
  <a [ routerLink ] = "['users']">Users</a>
```

### Understanding navigation Paths

- If we use relative paths ot gonna attach to the current path "servers", but if we use absolute path, it will navigate to the indicated path taking as reference de root: "/servers"
- We can use "../servers" to go one or two levels from the current path

### Styling Active Router Links

- We can use routerLinkActive directive in the template to indicate the active element and we can indicate a class that we need when the route is active
```html
  <a routerLinkActive="active-class-we-need"></a>
```
- We can find an error with the empty route, because the component attached to it is ever active. To fix it we can add a especial configuration with **`[routerLinkActiveOption]="{ exact: true }"`**

```html
  <li
    role="presentation"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }"
  >
    <a routerLink="/">Home</a>
  </li>
```

### Navigate Programmatically

- What if we need to navigate after an action?
- We can use the Router from angular/router
- Then we can call `this.router.navigate(['servers']);`

#### Relative Paths

- When we use router.navigate method, if put a relative path it doesn't navigate to servers/servers path, still in /server. because doesn't know where it is, if we want to tell it where it is, we need to pass a second argument.
- ActivatedRoute from router inject the current path.

quick example:

```ts
  import { Router, ActivatedRoute } from '@angular/router'

  constructor(private router: Router, private route: ActivatedRoute){}

  onReload() {
    this.router.navigate(['users'], { relativeTo: this.route})
  }
```

### Passing Parameters to Routes

- We can define the path as:
 
 ```ts
  { path: 'users/:id/:name', component: UserComponent }
 ```

 - The ` : ` syntax tells to Route that is a dynamic value

#### To Use it

Where you call the route with dynamic route nee to inject again the ActiveRoute

```ts
  import { ActivatedRoute, Params} from '@angular/router'

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['id']
    }

    // If We Need an refresh of information for some change we can use observable
    // In this case Angular will destroy the subscription

    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    } )
  }

```

### Query Parameter and Fragments

- If we need  to pass special characters we can use Query params, to use it we can call from ActivatedRoute

```ts
  import { ActivatedRoute, Params } from '@angular/router'

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
      // It will work as a key value pair object { val: 'some'}
      this.first = this.route.snapshot.queryParams
      this.second = this.route.snapshot.fragment

      // If we need observable

      this.route.queryParams.subscribe()
      this.route.queryFragment.subscribe()
  }

```

### Nested Routes

In App Module we can go from this: 

```ts
  { path: 'servers', component: ServerComponent }
  { path: 'servers/:id', component: ServerComponent }
  { path: 'servers/:id/edit', component: ServerComponent }
```

To this:

```ts
  { path: 'servers', component: ServersComponent, children: [
  { path: ':id', component: ServerComponent },
  { path: ':id/edit', component: EditServerComponent }
  ] }
```

To fix possible issue ('cannot find outlet to load'), we need to something in the template, we need to add the outlet to the children to:

```html
  <router-outlet></router-outlet>
```

#### Query Parameters notes

- Instead of use router navigate to navigate to some route like this:

```ts
  onEdit(){
    this.router.navigate(['servers', this.server.id, 'edit'])
    // This will gonna build this path /server/2/edit
  }
```

- We can do something like this:

```ts
  onEdit(){
    this.router.navigate(['edit'], { relativeTo: this.route } )
    // This will gonna build the same path /server/2/edit
  }
```

- To Preserve the some value in the query that may have been overwritten, we can use queryParamsHandling property.

```ts
  onEdit(){
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' } )
  }
```

### Redirecting and Wildcard Routes

- Here we use redirectTo
- 
```ts
  { path: 'not-found', component: PageNotFoundComponent }
  { path: 'something', redirectTo: '/not-found' }
```

- To catch all un-exists or invalid routes we can use `**`

```ts
  { path: 'not-found', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/not-found' }
```

### Outsourcing the Route Configuration

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import all the components

// Here we declare all the paths
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@ngModule({
    imports: [
    RouterModule.forRoot(appRoutes)
  ],
  // here we say to Angular what of this module is accessible
  exports: [RouterModule]
})

export class AppRoutingModule {}
```

- Then only import our module in app.module.ts file

```ts

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // *
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})

```


### Introduction to Guards

- Is using to show or not components
- We use CanActive from angular router

```ts
  import { 
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

  export class AuthGuard implements CanActivate {
    constructor (
      private authService: AuthService, // This is a service that returns a promise
      private router: Router // To redirect to Home page if is no 
    )    
    
    canActivate( // 
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean { // It can return an Observable, promise or as a synchronize boolean 
      return this.authService.isAuthenticated().then(
        (authenticated: boolean) => {        
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }      
        }
      )
    }
```

- Then we need to indicate where this Guard must be
- Don't forget to import this guard in providers

```ts
{
  path: 'serves',
  canActivate: [AuthGuard] // it receive an array with all guards that it needs, work as a middleware
  component: ServersComponent,
  ...
}
```

- For children we can use CanActivateChild

```ts
  canActivateChild(
    route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state) // we can use the same logic that before
    }
```

- In the middleware we can use both or just Children

```ts
{
  path: 'serves',
  //canActivate: [AuthGuard], 
  canActivateChild: [AuthGuard] // In this case we only use for children
  component: ServersComponent,
  ...
}
```


#### Controlling Navigation with canDeactivate

- You can prevent an accidental navigation away after some change is validated

- A guard needs to be a service

#### Passing Static Data to a Route

- Just we can use data in the body of the route object

```ts
  { 
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'page not found'} // here we passing the data
  },
```

- To catch the data

```ts
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message']
  }
```

#### UseHash

Only for old browser, if you need a has tow avoid calls to server, is only for specify that the navigation is internal.