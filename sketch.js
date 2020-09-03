var ball;
var database;
var pos;
var location;

function setup()
{
    database = firebase.database();
    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    location = database.ref('ball/position')
    location.on("value",readPosition,showErr)

    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
       'x' : pos.x + x,
       'y' : pos.y + y
    });
}

function readPosition(data)
{
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}

function showErr()
{
    console.log("Error")
}