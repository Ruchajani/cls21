var canvas;
var music;
var s1,s2,s3,s4,ball,edges
function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     ball=createSprite(200,200,20,20)
     ball.shapeColor="red"
     ball.velocityX=2
     ball.velocityY=3
     s1=createSprite(20,600,200,20)
     s2=createSprite(240,600,200,20)
     s3=createSprite(460,600,200,20)
     s4=createSprite(680,600,200,20)
     s1.shapeColor="red"
     s2.shapeColor="green"
     s3.shapeColor="blue"
     s4.shapeColor="yellow"


}

function draw() 
{
    background(rgb(169,169,169));
    //create edgeSprite

    drawSprites()
    if(isTouching(ball,s1))
    {
        ball.shapeColor="red"
    }else if(isTouching(ball,s2))
    {
        ball.shapeColor="green"
    }else if(isTouching(ball,s3))
    {
        ball.shapeColor="blue"
    }else if(isTouching(ball,s4))
    {
        ball.shapeColor="yellow"
    }
    edges=createEdgeSprites()
  bounceOff(ball,edges[0])
  bounceOff(ball,edges[1])
  bounceOff(ball,edges[2])
  bounceOff(ball,edges[3])
    //add condition to check if box touching surface and make it box
}
