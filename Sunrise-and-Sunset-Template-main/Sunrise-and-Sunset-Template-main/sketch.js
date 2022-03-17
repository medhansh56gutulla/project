const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    async function getTime(){
        var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responsejson = await response.json ()
        console.log(responsejson)
        var date = responsejson.datetime

        console.log(date)
        var hour = date.slice (11,13)
        console.log(hour)
        if(hour>=12){
        Text("Time : "+ hour%12 + " PM", 50,100);
        }
        else if(hour==0){
        Text("Time : 12 AM",100,100);
        }
        else{ 
        Text("Time : "+ hour%12 + " AM", 50,100);
        }
      }
}
    



async function getBackgroundImg(){

    // write code to fetch time from API
    
 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract hour
    

    
    
    
    backgroundImg = loadImage(bg);
    async function getTime(){
        var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responsejson = await response.json ()
        console.log(responsejson)
        var date = responsejson.datetime
        console.log(date)
        var hour = date.slice (11,13)
        console.log(hour)
        if (hour >= 06 && hour <= 19){
            bg = "sprites/sunrise.png"
            
        }
        else {
            bg = "sprites/sunset.png"
        }
        backgroundImg = loadImage(bg)
      }
}
