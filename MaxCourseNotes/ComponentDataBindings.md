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