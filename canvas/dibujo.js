  var d = document.getElementById("dibujito");
  var texto = document.getElementById("texto_lineas");
  var boton = document.getElementById("botoncito");
  boton.addEventListener("click", dibujoPorClick);
  var ancho = d.width;
  var lienzo = d.getContext("2d");

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

  function dibujoPorClick()
  {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var inver;
    var colorcito = "#AAF";
    var colorcito2 = "#FAF";
    var colorcito3 = "#FFA";
    var colorcito4 = "#AFA";
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
      yi = espacio * l;
      xf = espacio * (l + 1);
      inver = 300 - (espacio * (l + 1));
      dibujarLinea(colorcito, 300, yi, xf, 0);
      dibujarLinea(colorcito2, 0, yi, xf, 300);
      dibujarLinea(colorcito3, 0, inver, xf, 0);
      dibujarLinea(colorcito4, 300, yi, inver, 300);
      console.log("linea" + 1)
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
    dibujarLinea(colorcito2, 299, 1, 1, 1);
    dibujarLinea(colorcito2, 299, 299, 299, 1);
  }
