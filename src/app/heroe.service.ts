import { Injectable } from '@angular/core';

import { Heroe } from './heroe';
import { HEROES } from './mockups/mock-heroes';

@Injectable()
export class HeroeService {

  constructor() { }

  // retorno comun
  getHeroes(): Heroe[] {
    return HEROES;
  }

  // retorno en promesa
  getHeroesPromise(): Promise<Heroe[]> {
    return Promise.resolve(HEROES);
  }

  // retorno en promesa con delay
  getHeroesDelayPromise():Promise<Heroe[]>{
    return new Promise(resolve => {
      // Simula una latencia de 2 segundos del servidor
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  


}
