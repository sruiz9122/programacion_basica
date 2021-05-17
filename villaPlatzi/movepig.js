var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};

  document.addEventListener("keyup", moverCerdo);
  var sr = document.getElementById ("movepigcv");
  var papel = sr.getContext("2d");
  var xcerdo = 0;
  var ycerdo = 0;


  var fondo = {
    url: "tile.webp",
    cargaBien: false
  }

  var cerdo = {
    url: "cerdo.png",
    cargaBien: false
  }

  var vaca = {
    url : "vaca.png",
    cargaBien : false
  }

  var cantidad = aleatorio (1, 20);

  fondo.imagen = new Image();
  fondo.imagen.src = fondo.url;
  fondo.imagen.addEventListener("load", cargarFondo);

  cerdo.imagen = new Image();
  cerdo.imagen.src = cerdo.url;
  cerdo.imagen.addEventListener("load", cargarCerdo);

  vaca.imagen = new Image();
  vaca.imagen.src = vaca.url;
  vaca.imagen.addEventListener ("load", cargarVaca);

  function cargarFondo() {
    fondo.cargaBien = true;
    dibujar();
  }

  function cargarCerdo() {
    cerdo.cargaBien = true;
    dibujar();
  }

  function cargarVaca() {
    vaca.cargaBien = true;
    dibujar();
  }

  function dibujar() {
  //console.log();
    if(fondo.cargaBien) {
      papel.drawImage(fondo.imagen, 0, 0);
    }

       
      if(vaca.cargaBien){
        console.log(cantidad);
        for (var v = 0; v < cantidad  ; v++)
        {
          var x = aleatorio (0, 7);
          var y = aleatorio (0, 7);
          var x = x * 60;
          var y = y * 60;
          papel.drawImage(vaca.imagen, x, y);
        }
      }
  }

  function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  }

  function moverCerdo(evento){
    console.log(evento);
    var movimiento = 15;
    switch(evento.keyCode)
    {
      case teclas.UP:
        papel.drawImage(cerdo.imagen, xcerdo, ycerdo - movimiento);
        ycerdo = ycerdo - movimiento;
      break;
      case teclas.DOWN:
        papel.drawImage(cerdo.imagen, xcerdo, ycerdo + movimiento);
        ycerdo = ycerdo + movimiento;
      break;
      case teclas.LEFT:
        papel.drawImage(cerdo.imagen, xcerdo - movimiento, ycerdo);
        xcerdo = xcerdo - movimiento;
      break;
      case teclas.RIGTH:
        papel.drawImage(cerdo.imagen, xcerdo + movimiento, ycerdo);
        xcerdo = xcerdo + movimiento;
      break;
    }
  }
