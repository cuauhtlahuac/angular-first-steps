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
