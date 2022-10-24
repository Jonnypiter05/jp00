var images= [
 "pai.jpg","mae.webp","criaca1.jpg","bebe.jpg"
];
var names =[
    "Álbum de Família","Flamarion","Georgiana","João Pedro","Antônio"
];
var i = 0;
function update() 
{
    i++ ;
    var numberoffamilimemberinarray = 5
    if(i > numberoffamilimemberinarray )
{
    i = 0;
}
var updateImage = images[i];
var updateName = names[i];
document.getElementById("pai").src = updateImage;
document.getElementById("papai").src = updateName;
}