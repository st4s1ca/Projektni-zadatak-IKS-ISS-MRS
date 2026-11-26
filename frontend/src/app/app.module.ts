import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { App } from './app.component';
import { Profile } from './profile/profile.component';

@NgModule({
  declarations: [App, Profile],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
