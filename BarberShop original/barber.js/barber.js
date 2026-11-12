/*carrusel de imagenes de desvanecimiento*/

function desvanecer()
{
    document.getElementById("banner").style.transition="opacity 1s ease-in-out";
    document.getElementById("banner").style.opacity="0";
    setTimeout(carrusel ,1000);
}

/*carrusel de imagenes*/

var i=1;
function carrusel()
{
    i++;
    if(i>4)  i=1;
    document.getElementById("banner").setAttribute("src","../images/banner"+i+".jpg");
    setTimeout(function(){
        document.getElementById("banner").style.transition="opacity 1s ease-in-out";
        document.getElementById("banner").style.opacity="1";
    }, 50);
    setTimeout(desvanecer ,4000);

}

desvanecer();