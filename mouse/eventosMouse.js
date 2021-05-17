
document.addEventListener("mousemove", mueveRaton);
document.addEventListener("mousedown", ratonAbajo);
document.addEventListener("mouseup", ratonArriba);

var cuadrito = document.getElementById("canvasMouse");
var papel = cuadrito.getContext("2d");
var x = 0;
var y = 0;
var estado = 0;
var colorLinea = "black";
//dibujarLinea("red", 100, 100, 220, 200, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function mueveRaton(evento)
{
    //console.log(evento);
    if (estado == 1)
    {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
    }

    x = evento.layerX;
    y = evento.layerY;
}

function ratonAbajo(evento)
{
    //console.log(evento);
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function ratonArriba(evento)
{
    //console.log(evento);
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
}
