import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo = 'Tour de heroes';

  heroe:Hereo = {
    id : 1,
    nombre: 'Tormenta'
  }

  constructor() { }

  ngOnInit() {
  }

}

export class Hereo{
  id: number;
  nombre: string;
}