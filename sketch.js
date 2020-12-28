//Create variables here
var dog,happydog,database,foods,foodstock,dogimg;
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  
  dog.addImage(dogimg);
  dog.scale=0.3;
  database=firebase.database();
  foodstock=database.ref("Food")
  foodstock.on("value",readStock);
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStocks(foods);
    dog.addImage(happydog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  stroke("white");
  fill("black");
  text("foodstock:"+foods,150,90);
  text("press up arrow to feed the drago milk",150,50);
  

}

function readStock(data){
  foods=data.val();
}

function writeStocks(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
