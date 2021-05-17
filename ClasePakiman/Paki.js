var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
//console.log(imagenes);
/*
var cauchin = new Pakiman ("Cauchin", 100, 30);
var pokacho = new Pakiman ("Pokacho", 80, 50);
var tocinauro = new Pakiman ("Tocinauro", 120, 40);
*/
//console.log(cauchin, pokacho, tocinauro);
//pokacho.hablar();
var coleccion = [];
coleccion.push( new Pakiman ("Cauchin", 100, 30) );
coleccion.push( new Pakiman ("Pokacho", 80, 50) );
coleccion.push( new Pakiman ("Tocinauro", 120, 40) );
console.log(coleccion);

for (var ser of coleccion)//cuando sirve indice se pone in cuando sirve objeto se pone of
{
  ser.mostrar();
}
/*
pokacho.mostrar();
tocinauro.mostrar();
cauchin.mostrar();
*/
for (var x in coleccion [0])
{
    console.log(x);
}
