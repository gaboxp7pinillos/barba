function desvanecer()
{
    document.getElementById("foto").style.transition="opacity 1s ease-in-out";
    document.getElementById("foto").style.opacity="0";
    setTimeout(carrusel ,1000);
}

var i=1;
function carrusel()
{
    i++;
    if(i>3)  i=1;
    document.getElementById("foto").setAttribute("src","../images/foto"+i+".jpg");
    setTimeout(function(){
        document.getElementById("foto").style.transition="opacity 1s ease-in-out";
        document.getElementById("foto").style.opacity="1";
    }, 50);
    setTimeout(desvanecer ,4000);
}

desvanecer();