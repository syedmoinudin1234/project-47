var backgroundImage
var doremon,doremonImg
var doracake,doracakeImg
var iceblock,iceblockImg,iceblockgroup


function preload(){
backgroundImage=loadImage("assets/nobita house.jpg")
doremonImg=loadImage("assets/doremon.png")
doracakeImg=loadImage("assets/doracake.png")
iceblockImg=loadImage("assets/ice block.png")

}
function setup(){
createCanvas(windowWidth,windowHeight)
doremon=createSprite(250,height-280)
doremon.addImage("standing",doremonImg)
doremon.scale=1.1

iceblockgroup=createGroup()

}
function draw(){
background(backgroundImage)
drawSprites()
if (keyDown(RIGHT_ARROW)){
    doremon.x+=80
}
if (keyDown(LEFT_ARROW)){
    doremon.x-=80
}
if (keyDown(UP_ARROW)){
    doremon.y-=80
}
if (keyDown(DOWN_ARROW)){
    doremon.y+=80
}
spawniceblocks()

}

function spawniceblocks() {
    var iceblock1= createSprite(1000,height/2+350,40,10)
    iceblock1.addImage(iceblockImg)
    iceblock1.scale=1.6
    iceblockgroup.add(iceblock1)
    

    var iceblock2 = createSprite(2000,height/2+350,40,10)
    iceblock2.addImage(iceblockImg)
    iceblock2.scale=1.6
    iceblockgroup.add(iceblock2)


    var iceblock3 = createSprite(1500,height/2-100,40,10)
    iceblock3.addImage(iceblockImg)
    iceblock3.scale=1.6
    iceblockgroup.add(iceblock3)

    var iceblock4 = createSprite(width/2,height/2-750,40,10)
    iceblock4.addImage(iceblockImg)
    iceblock4.scale=1.6
    iceblockgroup.add(iceblock4)

    var iceblock5 = createSprite(width/2+700,height/2+350,40,10)
    iceblock5.addImage(iceblockImg)
    iceblock5.scale=1.6
    iceblockgroup.add(iceblock5)

    var iceblock6 = createSprite(width/2+1700,height/2+350,40,10)
    iceblock6.addImage(iceblockImg)
    iceblock6.scale=1.6
    iceblockgroup.add(iceblock6)

    var iceblock7 = createSprite(width/2+1200,height/2-100,40,10)
    iceblock7.addImage(iceblockImg)
    iceblock7.scale=1.6
    iceblockgroup.add(iceblock7)


}