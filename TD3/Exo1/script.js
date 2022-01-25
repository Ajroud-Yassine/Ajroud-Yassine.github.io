function onloadimg()
{
var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);

    // Maison
    ctx.fillSTyle ='green';
    ctx.fillRect(300,1000,250,200);

}