import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../heroe';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroeService } from '../heroe.service';
// para manejar el parametro de la url
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent implements OnInit {

  @Input() heroe: Heroe;


  constructor(
  private heroService: HeroeService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.heroService.getHeroesConParametro(+params['id']))
    .subscribe(heroe => this.heroe = heroe);
  }

  volver(): void {
  this.location.back();
}


}
