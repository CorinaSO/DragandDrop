# DragandDrop
Código para ver como trabaja el drag and drop.
Se utiliza dos zonas, la parte izquiera como mostrador donde se pintan las frutas que se pueden llevar a la segunda zona que representaría el carro.
Se hace uso de los eventos, añadiendo para cada objeto fruta los eventos correspondientes. A la cesta se le añade los eventos correspondientes para permitir el drag an drop.

## Ficheros
### main.js 
* Fichero que contiene el código javascript usado

### Clase PiezaFruta
Clase que crea el elemento div que se podrá arrastar hasta la cesta. Dicho div contiene a su vez un elemeto img y un elemento span donde guardaremos el precio de la fruta.
Por defecto la clase se crea con una imagen y precio fijo.
Existen dos métodos en dicha clase, uno para cambiar la imagen **asignarImagen()** y otro para cambiar el precio **asignarPrecio()**.

### main.css
* Fichero donde se definen los estilos 

