# TourOfHeroesEs

Tags & explicación:

# paso-01
# Real Hello World;

`ng new tour-of-heroes-es`

Para hacer un verdadero "hello world" eliminamos los modulos que no necesitamos.

`ng serve`


# paso-02
# Nuestro primer compoonente

`ng g component listado`

installing component
  create src/app/listado/listado.component.css
  create src/app/listado/listado.component.html
  create src/app/listado/listado.component.spec.ts
  create src/app/listado/listado.component.ts
  update src/app/app.module.ts

bootstrap: [AppComponent] =&#61; bootstrap: [ListadoComponentComponent]

Modificamos el Index para que levante el tag de listado
Modificamos los datos de listado para que muestre html bindeado


# paso-03

# Creando la clase heroe y modificando datos 

para modifcar a los heroes utilizamos en app.module.ts
import { FormsModule }   from '@angular/forms'; 
[(ngModel)]


# paso-04
# maestro-detalle

El prefijo (*) del ngFor es una parte importante de esta sintaxis. Indica que el elemento '&#60;li&#61;' y sus hijos constituyen una plantilla "maestra".
La directiva ngFor itera sobre la matriz de héroes del componente y procesa una instancia de esta plantilla para cada héroe en esa matriz.
La parte del héroe let de la expresión identifica a héroe como la variable de entrada de plantilla, que contiene el elemento heredero actual para cada iteración. Puede hacer referencia a esta variable dentro de la plantilla para acceder a las propiedades del héroe actual.

agregamos estilos al listado

Ahora que tenemos un listado de hereos lo vamos a tener que elegir para poder ver los detalles del mismo ( master -&#61; detail)
Lo que vamos a hacer es ejecutar una funcion click sobre cada uno... para que angular reconzca que vamos a ejecutar una funcion click
tenemos que agregar las parentesis
por ejemplo : '&#60;li (click)="seleccionar(heroe)"&#61;Tormenta&#60;/li&#61;'
Ahora que tenemos el objeto del heroe seleccionado lo que vamos a hacer es mostrarlo arriba en la parte del template que teniamos
cambiando la variable a heroeSeleccionado.
El problema que vamos a tener es que nuestra consola nos va a dar un error por "null o undefined" debido a que al iniciar nuestra
web app no tiene valor nuestro heroeseleccionado.
Para eso vamos a utilizar *ngIf y de esta forma vamos a mostrar los datos solo si tiene valor y evitamos el error.

Por ultimo lo que vamos a hacer es agregar una class a nuestro listado solamente cuando este seleccionado, para eso vamos a escribir
en nuestro tag li
'&#60;li *ngFor="let heroe of HEROES" (click)="seleccionar(heroe)" [class.selected]="heroe === heroeSeleccionado"&#61;'



# paso-05
# Componente Multiples

ahora que ya tenemos el listado completo, deberiamos tener un componente aparte aparte para el detalle... 

El nombre de clase de componente debe ser escrito en CamelCase y terminan en la palabra "component".
La clase de componentes de detalle héroe es HeroeDetalleComponent.

El nombre del archivo del componente debe ser deletreado en el caso del guión medio, cada palabra separada por guiones, y terminar en .component.ts. La clase HeroeDetalleComponent se encuentra en el archivo heroe-detalle.component.ts.
Para generar nuestro componente y sus archivos vamos a ejecutar:

`ng g c heroe-detalle`

installing component
  create src/app/heroe-detalle/heroe-detalle.component.css
  create src/app/heroe-detalle/heroe-detalle.component.html
  create src/app/heroe-detalle/heroe-detalle.component.spec.ts
  create src/app/heroe-detalle/heroe-detalle.component.ts
  update src/app/app.module.ts

Ahora vamos a sacar de nuestro listado la parte del detalle y la vamos a agregar en nuestro nuevo componente

Ahora vamos a necesitar la clase que creamos de heroe que tenemos en el archivo listado.component.ts, como la vamos a utilizar en varios archivos, vamos a generar un archivo para nuestra clase heroe y poder importarla donde la necesitemos.
Una vez creada simplemente tenemos que importarla

`import { Heroe } from '../heroe'`

En nuestro componente principal (listado) vamos a agregar nuestro componente detalle... esto lo haremos de la siguiente forma:

&#60;app-heroe-detalle [heroe]="heroeSeleccionado"&#61;&#60;/app-heroe-detalle&#61;

El tag es el generado por el componente, lo que esta entre corchetes es el parametro (nombre del input) que va a recibir el el componente y lo que esta adentro de las comillas es la variable que le vamos a pasar.

Lo que nos queda hacer, es que nuestro componente detalle pueda obtener parametros al ser inicializado, para eso vamos a importar desde nuestro componente a Input y luego indicar que el "Input" que va a recibir es heroe

@Input() heroe: Heroe;

# paso-06
# Servicios

Vamos a crear un servicio para Heroes para poder consumir desde cualquier componente
Para ello vamos a ejecutar:

`ng g service heroe`

installing service
  create src/app/heroe.service.spec.ts
  create src/app/heroe.service.ts
  WARNING Service is generated but not provided, it must be provided to be used

  Vamos a ver que tenemos un WARNING que nos avisa que no lo agrego a providers... Los servicios los podemos agregar en providers ( no es obligatorio ) dentro del app.module... en nuestro caso lo vamos a realizar y el @NgModule va a quedar asi

`---------`
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
  providers: [HeroeService],
  bootstrap: [ListadoComponent]
`---------`


Ahora que tenemos creado el servicio vamos a trabajar sobre el...
Vamos a ver que importa  " Injectable " quien nos va a dejar poder utilizar y mantenerlo como un singleton sobre toda nuestra app..

Antes de arrancar con el servicio vamos a crear un mockup de datos para poder consumirlo.
Para ello, vamos a crear una carpeta llamada mockups y dentro el archivo llamado mock-heroes.ts

`---------`
import { Heroe } from '../heroe';
export const HEROES: Heroe[] = [
  {id: 11, nombre: 'Mr. Nice'},
  {id: 12, nombre: 'Narco'},
  {id: 13, nombre: 'Bombasto'},
  {id: 14, nombre: 'Celeritas'},
  {id: 15, nombre: 'Magneta'},
  {id: 16, nombre: 'RubberMan'},
  {id: 17, nombre: 'Dynama'},
  {id: 18, nombre: 'Dr IQ'},
  {id: 19, nombre: 'Magma'},
  {id: 20, nombre: 'Tornado'}
];
`---------`


Ahora que tenemos nuestro injectable ( ver archivo hore.service.ts ) vamos a llamarlo donde lo necesitamos para no harcodear datos en los componentes

ver =&#61; listado.component.ts 

constructor(private heroeService: HeroeService) { }

Esto lo que va a hacer es traer a nuestro servicio y ya asignarlo a una variable (recordemos que es un singleton por lo tanto lo vamos a tener vivo mientras este vivo el tag)

Luego lo podemos llamar en el ngOnInit =&#61; que es cuando se inicia el componente ( lo deje comentado ) o tambien lo podemos llamar a travez de una funcion para cuando tengamos la necesidad de traer los datos (en el boton getHeroes() ).

Tambien se puede ver que traemos a los Heroes en distintas formas, para eso podes ver el archivo hore.service.ts
Que vamos a tener llamadas con promise y con delay para "simular" a una ida y vuelta del servidor

# paso-07
# Ruteo de nuestra aplicación

Vamos a dividir nuestro componente listado Ahora

app.component =&#61; sera nuestra vista principal
listado.component =&#61; sera nuestro listado maestro
heroes-detalle.component =&#61; sera nuestro detail

Para ello vamos a modificar el index.html
`---------`
&#60;app-listado&#61;Loading...&#60;/app-listado&#61; 
`---------`
por
`---------`
&#60;heroes-app&#61;&#60;img src="https://cdn-images-1.medium.com/max/800/1*1LufzuvnUabrvKL9yp6LMQ.gif"&#61;&#60;/img&#61;&#60;heroes-app&#61;
`---------`
En nuestra app.module.ts vamos a cambiar el componente en el cual arranca o sea el bootstrap a AppComponent y en AppComponent vamos a cambiar el selector a heroes-app

De esta forma ya tenemos nuestra base en app.component

Ahora lo que vamos a hacer es crear el router, para ello vamos a hacer una serie de pasos:

&#60;ul&#61;
    &#60;li&#61; Agregar en el head (index.html) el siguiente tag '&#60;base href="/"&#61;'&#60;/li&#61;
    &#60;li&#61; Importar el routerModule en el app.module&#60;/li&#61;
    &#60;li&#61; Declarar RouterModule en nuestro import (ngModule) &#60;/li&#61;
    &#60;li&#61; Agregamos el forRoot a nuestro archivo para configurar las rutas 
   `---------`
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
        { path: 'heroes', component: ListadoComponent }
        ])
    ],
   `---------`
   &#60;/li&#61;
&#60;/ul&#61;

Con estos pasos vamos a tener la primera parte del routeo.

Pero no queda todo ahora.. recuerden que nuestro app.component solo tiene un Hello World... vamos a cambiar eso por un menu, vamos a modificar nuestro html por este =&#61;

`---------`
&#60;h1&#61;{{title}}&#60;/h1&#61;
&#60;a routerLink="/heroes"&#61;Heroes&#60;/a&#61;
&#60;router-outlet&#61;&#60;/router-outlet&#61;
`---------`


Ahora que vemos como funciona el route, vamos a cambiar a heroes-detalle para que obtenga el parametro de la url en una ruta distinta y no dependa del componente listado.

Para eso primero vamos a agregar la nueva ruta:
`---------`
{ path: 'detalle/:id', component: HeroeDetalleComponent }
`---------`

Borramos el tag del componente en listado.component

Y a nuestro HeroeDetalleComponent vamos a agregar los siguientes imports

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';

Ademas vamos a importar switchMap para poder manejar los parametros como observables

`import 'rxjs/add/operator/switchMap';`

y agregamos en nuestro ngOnInit la llamada a nuestro servicio para obtener el heroe, pero con algunos cambios:

`-----------------`
this.route.params
    .switchMap((params: Params) =&#61; this.heroService.getHero(+params['id']))
    .subscribe(hero `&#61; this.hero = hero);
`-------------------`

Agregaremos una funcion para obtener un heroe dependiendo del ID en el servicio (ver en heroe.service)
Y luego haremos el routeo y el volver =&#61; ver en listado.component y heroe-detalle.component

# paso-08
# Refactor router

Ahora que tenemos todo funcionando, nos daremos cuenta que el ngModule no quedo muy "bonito" y hay muchas cosas que podrian no estar ahi, para eso vamos a hacer las siguiente modificaciones:

Vamos a crear una constante para manejar las rutas

`const routes: Routes`
`
Y para que esto funcione, tambien vamos a tener que importar 'Routes' del mismo lugar que importamos el modulo de ruteo

Y vamos a agrega
`exports: [ RouterModule ]`

El módulo de enrutamiento agrega RouterModule a las exportaciones para que los componentes del módulo complementario tengan acceso de enrutador declarable, como RouterLink y RouterOutlet.

Dentro de nuestro listado.component tenemos un ruteo por medio de un link, esto tambien se puede hacer por medio de una funcion, para ello agregaremos un funcion para la redirección

ver listado.component.ts funcion verHereo()


