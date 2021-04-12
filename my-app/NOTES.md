# Personal Notes of the Angular course of Udemy from Maximilian Schawarzmüller

## Course Structure

* The Basics.
* [Component & Data bindings](./CourseStructure/ComponentDataBindings.md).
* Directives.
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

## Good practices

- Nombrar al folder y el componente que va a almacenar con el mismo nombre.
