import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectornumericoComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
