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