# NgUpgradeTrial

Getting angularjs modules working in angular-cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Steps

### Install Deps

```
npm install @angular/upgrade --save
```

```
npm install angular@1.5.7 --save
```

``` 
npm install @types/angular --save
```

### .angular-cli.json
```
//...
"styles": [
  "styles.css"
],
"scripts": [
  "../node_modules/angular/angular.js"
],
//...
```
### src/tsconfig.app.json
```
"types": [
  "angular"
]
```
### src/typings.d.ts
```
//...
declare module 'angular';
```


### src/app/app.module.ts

```
import { UpgradeModule } from '@angular/upgrade/static';
import { UpgradedNgOneComponent } from './legacy/upgraded-app';
```

```
@NgModule({
declarations: [
  //...
  UpgradedNgOneComponent
  //...
],
//...  
imports: [
  //...
  UpgradeModule
  //...
],
entryComponents: [AppComponent],
//...
```

```
export class AppModule { 
  //adding upgrade to the appModule could allow it to be ref'd
  constructor(public upgrade: UpgradeModule) {}
  ngDoBootstrap() {}
}
```


### src/main.ts
```
import { UpgradeModule } from '@angular/upgrade/static';
import { NgOneModule } from './app/legacy/app';
```
```
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, [NgOneModule.name], {strictDi: true});
});
```

### src/app/legacy/app.ts
```
import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from '../app.component';

export const NgOneModule = angular.module('ngOneModule', []);

NgOneModule.component('ngOneComponent', {
  template: `<div>NgOneAppModule!</div><ng-two-app></ng-two-app>`
})

NgOneModule
.directive('ngTwoApp',
  downgradeComponent({
    component: AppComponent,
    outputs: ['callback']
  }) as angular.IDirectiveFactory
);

```


### src/app/legacy/upgraded-app.ts
```
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core'
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ng-one-component'
})

export class UpgradedNgOneComponent extends UpgradeComponent {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ngOneComponent', elementRef, injector);
  }
}
```

### src/index.html
```
  <ng-one-component>Loading Ng One...</ng-one-component>
  <app-root>Loading...</app-root>
```

## Angular Cli info

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
