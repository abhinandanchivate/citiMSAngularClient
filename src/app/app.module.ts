import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// @NGMODULE : decorator / annotation
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
// any routing module would be the last entry in the imports of ngModule.
// routing module will be used by modules to loading purpose.
// to access this module internally framework is using logic of array length -1 / last index.

// bootstrap : entry component to render the content to home page.
export class AppModule {}
