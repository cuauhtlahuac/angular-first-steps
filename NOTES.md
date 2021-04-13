# Personal Notes of the Angular course of Udemy from Maximilian Schawarzmüller

## Course Structure

* The Basics.
* [Component & Data bindings](./CourseStructure/ComponentDataBindings.md).
* [Directives](./CourseStructure/Directives.md).
* Service & Dependecy Injection
* Routing
* Observables: Async code
* Forms
* Pipes:
* Http:
* Authentication:
* Optimizations & NgModules
* Deployment
* Animations & Testing

Al final vamos a terminar un proyecto construido con todos los puntos aprendidos

**ngModel - directive**: basicamente dice a Angular que escuche el cambio y alamacene en la variable
  - Para poder usar esta directiva de angular se necesita importar el modulo `{ FormsModule }` en el archivo app.module.ts
  - ngModel es una característica de FormsMoules, por eso para usarlo necesitamos importar FormsModule

**Para agregar bootstrap**: checar en node-modules y agregar la ruta en amgular.json en el array de styles.

## Good practices and Tips

- Nombrar al folder y el componente que va a almacenar con el mismo nombre.
- Podemos buscar en google Element + Properties o Events para ver las opciones que tenemos para ángular.
- Para **debuggear** podemos usar el inspector de google, podemos buscar algún archivo especifico en los Sources webpack en la carpeta con un punto como nombre; dentro encontraremos los archivos de la carpeta src con el arbol de los archivos ts creados. Tambien existe una herramienta llamada **Augury** que la encontramos en las chrome extension de google.
