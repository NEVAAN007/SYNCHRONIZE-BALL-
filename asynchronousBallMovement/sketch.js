var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var location=database.ref("ball/position")
    location.on("value",readposition,showerror)
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
    database.ref ("ball/position").set({
        x:ball.x+x,
       y:ball.y+y
    })
    
}
function readposition(data){
    var pos= data.val()
ball.x=pos.x
ball.y=pos.y
}
function showerror(){
    console.log("error has occured")
}