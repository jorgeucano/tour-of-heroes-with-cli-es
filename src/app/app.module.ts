import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { HeroeDetalleComponent } from './heroe-detalle/heroe-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    HeroeDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ListadoComponent]
})
export class AppModule { }
