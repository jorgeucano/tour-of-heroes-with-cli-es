import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { HeroeDetalleComponent } from './heroe-detalle/heroe-detalle.component';

import { HeroeService } from './heroe.service';

import { RouterModule }   from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    HeroeDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'heroes', component: ListadoComponent },
      { path: 'detalle/:id', component: HeroeDetalleComponent }
    ])
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
