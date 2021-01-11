
var dog, dogImg,food,foodStock,database,happyDogImg
function preload()
{
dogImg=loadImage("images/dogImg.png")	
happyDogImg=loadImage("images/dogImg1.png")	
}

function setup() {
	createCanvas(800, 800);
  dog=createSprite(600,400,20,20)
  dog.addImage(dogImg)
  dog.scale=0.3
  database=firebase.database()
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  textSize(18)
  fill("white")
  stroke("white") 
  text("Note: Press UP_ARROW Key To Feed Fluffy Milk",200,100)
if(keyWentDown(UP_ARROW)){

  writeStock(food)
dog.addImage(happyDogImg)



}



}

function readStock(data){
food=data.val()

}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
})



  }
  
  