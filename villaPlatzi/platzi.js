  var vp = document.getElementById ("villaplatzi");
  var papel = vp.getContext ("2d");

  var fondo = {
    url : "tile.webp",
    cargaOK : false
  }

  var vaca = {
    url : "vaca.png",
    cargaOk : true
  }

    var pollo = {
      url : "pollo.png",
      cargaOk : true
    }

  var cerdo = {
    url : "cerdo.png",
    cargaOk : true
  }

  var a1 = aleatorio (0, 49);
  var a2 = aleatorio (50, 99);
  var cantidad = aleatorio (a1, a2);

  fondo.imagen = new Image();
  fondo.imagen.src = fondo.url;
  fondo.imagen.addEventListener ("load", cargarFondo);

  vaca.imagen = new Image();
  vaca.imagen.src = vaca.url;
  vaca.imagen.addEventListener ("load", cargarVaca);

  pollo.imagen = new Image();
  pollo.imagen.src = pollo.url;
  pollo.imagen.addEventListener ("load", cargarPollo);

  cerdo.imagen = new Image();
  cerdo.imagen.src = cerdo.url;
  cerdo.imagen.addEventListener ("load", cargarCerdo);

  function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
  }

  function cargarVaca() {
    vaca.cargaOK = false;
    dibujar();
  }

  function cargarPollo() {
    pollo.cargaOK = false;
    dibujar();
  }

  function cargarCerdo() {
    cerdo.cargaOK = false;
    dibujar();
  }
  function dibujar() {
    if(fondo.cargaOk)
    {
      papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
      console.log(cantidad);
      for (var v = 0; v < cantidad  ; v++)
      {
        var x = aleatorio (0, 5);
        var y = aleatorio (0, 5);
        var x = x * 80;
        var y = y * 80;
        papel.drawImage(vaca.imagen, x, y);
      }
    }

    if(pollo.cargaOk)
    {

      for (var v = 0; v < cantidad  ; v++)
      {
        var x = aleatorio (0, 4);
        var y = aleatorio (0, 4);
        var x = x * 80;
        var y = y * 80;
        papel.drawImage(pollo.imagen, x, y);
      }
    }

    if(cerdo.cargaOk)
    {

        for (var v = 0; v < cantidad  ; v++)
        {
          var x = aleatorio (0, 6);
          var y = aleatorio (0, 6);
          var x = x * 80;
          var y = y * 80;
          papel.drawImage(cerdo.imagen, x, y);
        }
     }
  }

  function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  }
