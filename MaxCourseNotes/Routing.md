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
