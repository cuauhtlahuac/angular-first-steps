# Component

- Es una parte importante del core de Angular
- El componente se especifica con algo llamado decorator. 
- Al decorador se le pasa un objeto de configuración, es metadata que le dice a Angular que hacer con la clase.
  - Selector: Al decorador le podemos indicar el selector para poder usar el componente en otros lados, se nombre como app- + el nombre del componente.
  - TemplateURL: Le especificamos la ruta donde esta nuestro template html del componente.

- Para usar el nuevo componente ncesitamos agregarlo/registrarlo al app.module.ts (Angular no escanea todos los files, solo los que le indicamos).
  - Lo agregamos en el NgModule decorator en la propiedad del objeto array declarations.
- Crear un component con CLI:
  - en terminal escribir `ng generate component`  ó `ng g  c` + Nombre del comppnente

## Template and Styles
- Template: Puede incluso cambiar el templateUrl por template y escribir la estructura html directamente , se pueden usar string literals backticks.
- Styles: Podemos usar la propiedad styles para agregar styles directamente con string litterals

## Selector
- Funciona igual que el css selector, como atribute selector `[app-component]`. Select by Id no funciona, ni los pseudo selectors.

<br/><br/>
# Databinding

- Communication: Comunica el código de typeScript con el HTML template.

## String Interpolation:

- Puedes usar `{{}}` syntax, dentro puedes poner typescript expressions. Siempre al final retornarán un string.
- Property binding: `<button [property]="typescript statement"` con esta sintaxis le indicas a Angular que esta será una propiedad del elemento dinámica.

## Passing and Using Data With Event Binding
- $event es la forma en que le pasamos la información del evento a el metodo

## Tow way binding
- Es la forma de que Angular conecta y hace update al mismo tiempo de un valor

## Binding to Custom Properties

- Es como los props en React, pero hay que especificarle a Angular que esa propiedad es un input con el decorador @input() ejecutadolo.

Syntax:

  * template: 
```html 
<app-tal
 *ngFor"let dataElement of Elements"
 [element]="dataElement"
></app-tal>
```

  * typescript:
```ts
@input() element: {type: string...}
```

## Assign an Alias to Custom Properties

- Al Input decorator le pasamos como primer argumento el alias que deseamos asignarle.

syntax:
  * typescript:
```ts
@Input('aliasElement')
```

## Binding to Custom Events

- Es parecido a custom element pero con metodos.

syntax:
  * template:
  ```html
  <app-any (customEvent)="onCustomAdded($event)"></app-any>
  ```
  * typescript:
    ```ts
    onCustomAdded(eventData){
      // do something...
    }
    ```
course example se define el evento en AppComponent que es el que llama a app-Cockpit y le va a pasar los metodos:
  ```ts
  export class AppComponent {

  serverElements = [ { type: 'server', name: 'TestServer',... } ]

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  }
  ```
    - el parametro que se pasa como $event es lo que se va arecibir como parametro del metodo, esto se va a llamar en el componente Cockpit como serverCreated
  ```html
    <app-cockpit (serverCreated)="onServerAdded($event)"><app-cockpit/>
  ```

  custom Event:
    - Con EventEmitter se usa presisamente para decirle a angular que ese evento se enviará o saldra ó emitirá a otro componente, es importante también especificar con el decorador @Output to binding it outside. 
  
  ```ts
    export class CockpitComponent implements OnInit {
      @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
      newServerName = '';
      newServerContent = '';

      onAddServer(){
        // Aquí emitimos los datos que se va a reicibir afuera. es como un ¡Hadouken!
        this.serverCreated.emit({
          serverName: this.newServerName,
          serverContent: this.serverContent,
        })
      }
    }
  ```

  ## Using Local References in Templates

  - Para crear una variable que se pueda usar dentro del template, sólo ahí y no fuera de él.
  - '#' + el nombre que hace referencia al elemento, no es un valor sino toda la referencia al elemento html y todas sus propiedades

example:

  HTML:

```html
  <input
    type="text"
    #inputReference
  >

  <button
    class="btn"
    (click)="onAddSome(inputReference)"
  >
```

  Typescript:

```ts
  onAddSome(nameInput: HTMLInputElement) {
    this.name: nameInput.value;
  }
```

## Getting Access to Template & DOM with **'@ViewChild()'**

- [Official Doc](https://angular.io/api/core/ViewChild).

- A el viewChild(), como primer parametro se le pasa un string selector, es decir el nombre la referencia local. También se le puede pasar un componente, pero tenemos que estár obviamente fuera del scope.
- Diferente al local reference aquí nos va a regresar un ElementRef, este se debe asignar al Elemento referenciado como type, y debemos importarlo del core
- Si no se tiene acceso en ngOnit pasar static a false

```ts
  // Para versiones superiores a la 8 se agrega {static: true}, 
  @ViewChild('someContentInput', {static: true}) someContentInput: ElementRef;
```

example:
  HTML:
```html
<input
type="text"
#someContentInput
>
```
  TS:
```ts
export class ExampleComponent (){
  name = '';
  @ViewChild('someContentInput', {static: true}) someContentInput: ElementRef;

  onDoSomething(someInput: HTMLInputElement) {
    this.name = someInput.value;
  }
}
```

## Components with ng-content

- Por default, todo lo que pongas entre las referencias de componentes tipo ```<app-some></app-some>``` ¡se pierde!, simply removed from the DOM.
- Podemos usar ```<ng-content></ng-content>``` para poder projectar lo de adentro.

```html
  <app-element
    *ngFor="let someElement of someElements"
    [aliasElement]="someElement"
  >
    <ng-content>
      <p>
        <strong *ngIf="someElement.type" === 'someType'>
        {{ someElement.content }}
      </p>
    </ng-content>  
  </app-element>
```
