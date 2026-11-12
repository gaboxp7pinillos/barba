

function desvanecer()
{
    document.getElementById("ban").style.transition="opacity 1s ease-in-out";
    document.getElementById("ban").style.opacity="0";
    setTimeout(carrusel ,1000);
}

/*carrusel de imagenes*/

var i=1;
function carrusel()
{
    i++;
    if(i>3)  i=1;
    document.getElementById("ban").setAttribute("src","../images/ban"+i+".jpg");
    setTimeout(function(){
        document.getElementById("ban").style.transition="opacity 1s ease-in-out";
        document.getElementById("ban").style.opacity="1";
    }, 50);
    setTimeout(desvanecer ,4000);

}

desvanecer();