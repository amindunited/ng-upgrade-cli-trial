declare var angular:any;
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
