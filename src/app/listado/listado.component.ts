import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';

import { HeroeService } from '../heroe.service';

import { Router } from '@angular/router';

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
  HEROES: Heroe[];

  constructor(private router: Router, private heroeService: HeroeService) { 
  }

  ngOnInit() {
    // this.HEROES = this.heroeService.getHeroes();
  }

  getHeroes():void{
    this.HEROES = this.heroeService.getHeroes();
  }

  // get con promesa
  getHeroesPromise(): void {
    this.heroeService.getHeroesPromise().then(heroes => this.HEROES = heroes);
  }

  // get con promesa y delay 2 segundos
  getHeroesDelayPromise():void{
    this.heroeService.getHeroesDelayPromise().then(heroes => this.HEROES = heroes);
  }

  seleccionar(heroe:Heroe){
    this.heroeSeleccionado = heroe;
    console.log(this.heroeSeleccionado);
    this.verHeroe();
  }

  verHeroe(): void {
    this.router.navigate(['/detail', this.heroeSeleccionado.id]);
  }

}
