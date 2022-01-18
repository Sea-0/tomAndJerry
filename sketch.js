var imgBG
var cat,rat
var catIMG,ratIMG,catIMG2,ratIMG2,catIMG3,ratIMG3;



function preload() {
    //carregue as imagens aqui
    imgBG=loadImage ("garden.png")
    catIMG =loadImage("cat1.png")
    catIMG2=loadAnimation("cat2.png","cat3.png")
    ratIMG=loadImage("mouse1.png")
    ratIMG2=loadAnimation("mouse2.png","mouse3.png")
    catIMG3=loadImage("cat4.png")
    ratIMG3=loadImage("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    
cat=createSprite(870,600)
cat.addAnimation("gatoSentado",catIMG);
cat.scale=0.2
rat=createSprite(400,600)
rat.addAnimation("ratoLevantado",ratIMG);
rat.scale=0.2

}

function draw() {
 background.x = windowWidth
    background(imgBG);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
   if(cat.x - rat.x < cat.width/2 - rat.width/2){
    cat.addAnimation("stopping",catIMG3)
    cat.x=500;
    cat.changeAnimation("stopping");
    cat.velocityX=0

    rat.addAnimation("interesting",ratIMG3)
    rat.changeAnimation("interesting")
   }
  
  drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
if(keyCode === LEFT_ARROW){
    rat.addAnimation("ratoProvocando",ratIMG2)
    rat.frameDelay=25;
    rat.changeAnimation("ratoProvocando")
    cat.velocityX=-5;
    cat.addAnimation("gatoCorrendo",catIMG2)
    cat.changeAnimation("gatoCorrendo")
} 
  
}
