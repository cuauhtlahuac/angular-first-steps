## Component

- Es una parte importante del core de Angular
- El componente se especifica con algo llamado decorator. 
- Al decorador se le pasa un objeto de configuración, es metadata que le dice a Angular que hacer con la clase.
  - Selector: Al decorador le podemos indicar el selector para poder usar el componente en otros lados, se nombre como app- + el nombre del componente.
  - TemplateURL: Le especificamos la ruta donde esta nuestro template html del componente.

- Para usar el nuevo componente ncesitamos agregarlo/registrarlo al app.module.ts (Angular no escanea todos los files, solo los que le indicamos).
  - Lo agregamos en el NgModule decorator en la propiedad del objeto array declarations.
- Crear un component con CLI:
  - en terminal escribir `ng generate component`  ó `ng g  c` + Nombre del comppnente