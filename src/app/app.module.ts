import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

//This is the component that we will create to wrap our old app
import { UpgradedNgOneComponent } from './legacy/upgraded-app';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UpgradedNgOneComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  //adding upgrade to the appModule could allow it to be ref'd
  constructor(public upgrade: UpgradeModule) {}
  ngDoBootstrap() {}
}
