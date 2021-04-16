# Directives notes

- Directives are **Instructions in the DOM**.
- We can build custom Directives
- `*` when we use the star is because is a structural directive, that means is that gonna change the structure of DOM.
- `#` To manage internal variables inside the template.

___
### attribute directives
- Are for styles, to change tyles
- [ngStyle] Expect a javascript object with styles
- [ngClass] To apply dynamically css classes when a condition is true

### ngFor directive

`*ngFor`: To iterate some element

___
## Attribute vs Structural Directives

___
### **Atribute Directives**: 
  - Sólo afecta al elemento al que ah sido adherido.
  - Luce como un atribute HTML.

#### ngClass
```html
<li [ngClass]="{className: true/false}"></li>
```
#### ngStyle
```html
<li [ngStyle]="{styleName: true/false ? 'value' : 'otherValue'}"></li>
```
#### Creating a Basic Attribute Directive.

- Se puede crear un nuevo archivo con la siguiente estructura `basic.directive.ts`
- Se crea una clase parecida a el componente, pero en este caso se importa `@Directive({})`
- Es importante agregar que usar esta forma no es una buena práctica, por el uso del ElementRef, pero también por el DOM, posteriormente usaremos Renderer2 para evitar problemas con los service  Workers.
  
  Se configura por lo regular de la siguiente forma:

  ```ts
  @Directive({
    selector: '[appBasicName]' // Ya no es necesario cuando la llamemos usar los corchetes, recordemos como funciona un selector
  })

  export class BasicNameDirective implements OnInit {
    // usaremos de ejemplo cambiar la clase donde se llame la Directiva
    constructor(private elementName: ElementRef){ // Aquí inyectamos la refrencia al elemento

    }

    OnInit() {
      this.elementName.nativeElement.style.backgroundColor = 'green';
    }
  }

  ```

  Para poder usar la Directiva tenemos que informarle a Angular en el archivo `app.modules.ts` que existe una nueva directiva justo como lo hacemos con los componentes.

  Para hacer uso de la directiva dentro de un template:

  ```html
  <p appBasicName> // Sólo lo agregamos como un atributo mas del elemento, usamos el nombre del selector.
  ```


####  Using the Render to build a **Better** Attribute Directive.

  - Se basa en la misma forma que creamos antes.

```ts

  import { Directive, OnInit, ElementRef, RendererV2 } from '@angular/core'  

  @Directive({
    selector: '[appBetterName]' // Ya no es necesario cuando la llamemos usar los corchetes, recordemos como funciona un selector
  })

  export class BetterNameDirective implements OnInit {
   
    constructor(private elRef: ElementRef, private renderer: RendererV2 ) {

    }

    OnInit() {
      // setStyle como primer argumento el elemento de referencia,
      // como segundo la propiedad,
      // tercero el valor detalles como el !important
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    }
  }

  ```
  Para hacer uso de la directiva dentro de un template:

  ```html
  <p appBetterName> // Sólo lo agregamos como un atributo mas del elemento, usamos el nombre del selector.
  ```

#### Using HostListener to Listen Events.

  - Ahora, si queremos cambiar el estilo en la directiva creada vamos a usar @HostListener decorator
  - Justo después de llamar la directiva mencionada, ponemos el evento que va a escuchar, en este casi es mouseover

  ```ts
  import { Directive, ElementRef, RendererV2, HostListener } from '@angular/core'  

  @Directive({
    selector: '[appBetterName]'
  })

  export class BetterNameDirective implements OnInit {
   
    constructor(private elRef: ElementRef, private renderer: RendererV2 ) {}

    @HostListener('mouseenter') nombreQueQuieras(eventData: Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red', false, false);
    }

    @HostListener('mouseleave') otroNombre(eventData: Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
    }
  }

  ```

  - Se agrega de la misma forma en la propiedad del componente a escuchar

#### Using HostBinding to Bind to Host Properties

  - Si lo que queremos es solo cambiar el color del fondo, hay una forma más facil de hacerlo con la directiva @HostBiding
  - Como primer parametro debemos pasarle el componente que queremos bindear

  ```ts
  import { Directive, HostBinding } from '@angular/core'  

  @Directive({
    selector: '[appBetterName]'
  })

  export class BetterNameDirective implements OnInit {
    @HostBinding('style.backgroundColor') nombreDelStyle: string;
    constructor() {}

    @HostListener('mouseenter') nombreQueQuieras() {
      this.nombreDelStyle === 'blue';
    }

    @HostListener('mouseleave') otroNombre() {
      this.nombreDelStyle === 'lime';
    }
  }

  ```

  - Se agrega exactamente igual

___

### Structurl Directives:

- Luce como un atributo HTML pero tiene un asterisco que lo distingue.
- Afecta a toda el area en el DOM, elemento agregados y removidos.
- ¡No puedes anidar dos en el mismo Elemento

#### *ngFor

#### *ngIf

