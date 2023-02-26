# GraficasApp

Esta aplicacion usa la libreria de:

```
https://valor-software.com/ng2-charts/#GeneralInfo
```

## Rutas y Lazyload

```
// graficas-routing.module.ts

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barra', component: BarrasComponent },
      { path: 'barra-doble', component: BarrasDobleComponent },
      { path: 'dona', component: DonaComponent },
      { path: 'dona-http', component: DonaHttpComponent },
      { path: '**', redirectTo: 'barra' },
    ]
  }
];
```

Las rutas se generan con el `children` para poder usar las rutas dentro del componente si queremos.

```
// app-routing.module.ts

const routes: Routes = [
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then(g => g.GraficasModule)
  },
  { path: '**', redirectTo: 'graficas' }
];
```

La carga peresoza se relaliza mediante el `loadChildren`

## Menu dinamico

```
<ul class="list-group">
  <li
    *ngFor="let item of menu"
    class="list-group-item"
    [routerLink]="item.ruta"
    routerLinkActive="active"
  >
    {{ item.texto }}
  </li>
</ul>

```

Del lado del .ts se secribe el array menu con sus propiedades.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
