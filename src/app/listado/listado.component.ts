import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo = 'Tour de heroes';

  heroe:Heroe = {
    id : 1,
    nombre: 'Tormenta'
  }

  heroeSeleccionado: Heroe;


  HEROES: Heroe[] = [
    { id: 11, nombre: 'Mr. Nice' },
    { id: 12, nombre: 'Narco' },
    { id: 13, nombre: 'Bombasto' },
    { id: 14, nombre: 'Celeritas' },
    { id: 15, nombre: 'Magneta' },
    { id: 16, nombre: 'RubberMan' },
    { id: 17, nombre: 'Dynama' },
    { id: 18, nombre: 'Dr IQ' },
    { id: 19, nombre: 'Magma' },
    { id: 20, nombre: 'Tornado' }
  ];

  constructor() { 
  }

  ngOnInit() {
  }

  seleccionar(heroe:Heroe){
    this.heroeSeleccionado = heroe;
    console.log(this.heroeSeleccionado);
  }

}

export class Heroe{
  id: number;
  nombre: string;
}