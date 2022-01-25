function onloadimg()
{
var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 0, 0);

    // Maison
    ctx.fillStyle ="blue";
    ctx.fillRect(300,1000,250,200);

    // Porte
    ctx.fillStyle ="green";
    ctx.fillRect(380,1050,100,150);
    
    // Soleil
    ctx.beginPath();
    ctx.arc(150,150,100,0,Math.PI*2,true);
    ctx.fillStyle = "yellow";
    ctx.fill();

}


function ciel()
{

    let ciel = document.getElementById('ciel');
    ciel.style.fill = "rgb(6, 35, 54)"

}