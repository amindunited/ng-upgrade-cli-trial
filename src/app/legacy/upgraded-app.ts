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