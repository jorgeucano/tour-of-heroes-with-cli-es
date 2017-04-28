# TourOfHeroesEs

Tags & explicación:

#paso-01
#Real Hello World;

´ng new tour-of-heroes-es´

Para hacer un verdadero "hello world" eliminamos los modulos que no necesitamos.

´ng serve´


#paso-02
#Nuestro primer compoonente

`ng g component listado`

installing component
  create src/app/listado/listado.component.css
  create src/app/listado/listado.component.html
  create src/app/listado/listado.component.spec.ts
  create src/app/listado/listado.component.ts
  update src/app/app.module.ts

bootstrap: [AppComponent] => bootstrap: [ListadoComponentComponent]

Modificamos el Index para que levante el tag de listado
Modificamos los datos de listado para que muestre html bindeado


#paso-03

Creando la clase heroe y modificando datos 

para modifcar a los heroes utilizamos en app.module.ts
import { FormsModule }   from '@angular/forms'; 
[(ngModel)]


#paso-04
maestro-detalle

El prefijo (*) del ngFor es una parte importante de esta sintaxis. Indica que el elemento <li> y sus hijos constituyen una plantilla "maestra".
La directiva ngFor itera sobre la matriz de héroes del componente y procesa una instancia de esta plantilla para cada héroe en esa matriz.
La parte del héroe let de la expresión identifica a héroe como la variable de entrada de plantilla, que contiene el elemento heredero actual para cada iteración. Puede hacer referencia a esta variable dentro de la plantilla para acceder a las propiedades del héroe actual.

agregamos estilos al listado

Ahora que tenemos un listado de hereos lo vamos a tener que elegir para poder ver los detalles del mismo ( master -> detail)
Lo que vamos a hacer es ejecutar una funcion click sobre cada uno... para que angular reconzca que vamos a ejecutar una funcion click
tenemos que agregar las parentesis
por ejemplo : <li (click)="seleccionar(heroe)">Tormenta</li>
Ahora que tenemos el objeto del heroe seleccionado lo que vamos a hacer es mostrarlo arriba en la parte del template que teniamos
cambiando la variable a heroeSeleccionado.
El problema que vamos a tener es que nuestra consola nos va a dar un error por "null o undefined" debido a que al iniciar nuestra
web app no tiene valor nuestro heroeseleccionado.
Para eso vamos a utilizar *ngIf y de esta forma vamos a mostrar los datos solo si tiene valor y evitamos el error.

Por ultimo lo que vamos a hacer es agregar una class a nuestro listado solamente cuando este seleccionado, para eso vamos a escribir
en nuestro tag li
<li *ngFor="let heroe of HEROES" (click)="seleccionar(heroe)" [class.selected]="heroe === heroeSeleccionado">

