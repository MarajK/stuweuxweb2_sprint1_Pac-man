var socket;

var moves = 4; //anzahl unterschiedliche bewegungen 

var settings = {
    start: false,
    finished: false,
    queue:0,
    ballx:-1000,
    bally:window.innerHeight/2,
    radius:50,
    stepx:6,
    stepy:5,
    pacmanx:window.innerHeight/6,
    pacmany:window.innerHeight/6,
}

var mara_moved=false;
let angle = 0;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    socket=io.connect();
    socket.emit("settings", settings);
    socket.on("canIstart", startDrawing);
    socket.on("settings", setSettings);

    textFont('Rampart One');
   
    background(0);
    blau = color("#2363EB");
    rot = color("#D22D39");
    gelb = color("#EBC141");
    rosa = color("#E7909F");
    gruen = color("#42936C");

    //rectMode(CENTER);

}

function draw(){
    //alles, was du hier zeichnest ist bereits da 

    // Spielfeld
    // stroke(blau);
    // strokeWeight(7),
    // line(width / 15,settings.bally-settings.bally/4*2 , width / 15*14, settings.bally/4*2);
    // line(width / 15,settings.bally + settings.bally/4*3, width / 15*14,settings.bally + settings.bally/4*3);
   
    // noFill();
    // rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    // rect(width / 2.5, height/3, settings.pacmanx, settings.pacmany/3,settings.radius-10);
    // rect(width/3, height/1.7, settings.pacmanx/3, settings.pacmany*1.2,settings.radius-10);
    // rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    // rect(width/2, height/1.6, settings.pacmanx/3, settings.pacmany/2,settings.radius-10);

    // gelbe Linie
    // fill(gelb);
    // noStroke();


    // rect(width / 12, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*2, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*3, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*4, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*5, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*6, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*7, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*8, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*9, hheight/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*10, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*11, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 12*12, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);

    // rect(width / 12*2, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);

    // // rect(width / 12, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*2, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*3, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*4, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*5, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*6, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*7, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*8, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*9, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*10, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*11, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*12, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);

    // // rect(width / 12, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*2, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*3, height/6.5*4, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*4, height/6.5*5, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*5, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*7, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*8, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*9, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*10, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*11, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*12, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);

    // // rect(width / 12, height/6.5*2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*2, height/6.5*3, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*3, height/6.5*4, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*4, height/6.5*5, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*5, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*7, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*8, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*9, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*10, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*11, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // // rect(width / 12*12, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);

    


    
    background(0);
    fill(gelb);

    // Pac Man
    fill(gelb);
    noStroke();
    arc(width/2, height/2, settings.pacmanx*3, settings.pacmany*3, radians(20), radians(320));

    // Text PAC MAN
    fill(255)
    textSize(settings.pacmany);
    text('PAC MAN', width/6, settings.pacmany*2.5);

    
    if(settings.start==false){
        socket.emit("canIstart", settings);
    }
    if(settings.start==true && settings.finished==false){
        //draw
        makeMove();

        if (settings.ballx > width+width/4) {
            
            settings.ballx = settings.ballx - width-200; //zurücksetzen um die eigene Breite

            socket.emit("next", settings);//start next ball
            settings.finished=true;
        }
        
        
    }

}

function startDrawing(data){
    settings.start = data.start;
    settings.ballx=data.ballx;
    settings.bally=data.bally;

    //console.log("I got "+settings.ballx+" and "+ settings.start)
}

function setSettings(data) {
    settings.socketid = data.socketid;
    settings.queue = data.queue;
    //console.log(settings.queue);
    //setting=data;
}


function makeMove(){
    let move = settings.queue % moves;
    //console.log("move "+move)
    switch(move){
        case(0):
        move_1();
        break;
        case(1):
        move_2()
        break;
        case(2):
        move_3()
        break;
        case(3):
        move_4()
        break;
    }
}

function move_1(){

    background(0);
    fill(gelb);

    // Text PAC MAN
    textSize(settings.pacmany/1.3);
    text('PAC MAN', width / 15, settings.pacmany/1.2);
    textSize(settings.pacmany/3);
    fill(255)
    text('Level 1', width /1.3, settings.pacmany/1.2);

    // Spielfeld
    stroke(blau);
    strokeWeight(7),
    line(width / 15,settings.bally-settings.bally/2 , width / 15*14, settings.bally- settings.bally/2);
    line(width / 15,settings.bally + settings.bally/1.3, width / 15*14,settings.bally + settings.bally/1.3);
   
    noFill();
    rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    rect(width / 2.5, height/3, settings.pacmanx, settings.pacmany/3,settings.radius-10);
    rect(width/3, height/1.7, settings.pacmanx/3, settings.pacmany*1.2,settings.radius-10);
    rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    rect(width/2, height/1.6, settings.pacmanx/3, settings.pacmany/2,settings.radius-10);

    // Elemente
    fill(rosa);
    noStroke();
    circle(width/4, height/3,settings.radius);
    circle(width/4, height/3,settings.radius);
    circle(width/4, height/3,settings.radius);

    // // gelbe Linie
    // fill(gelb);
    // noStroke();
    // rect(width / 6 -150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6 +150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6+300, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6 +450, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6+600, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6+750, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    // rect(width / 6+900, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);

     // Elemente
     fill(rosa);
     noStroke();
     circle(width/4, height/3,settings.radius);
     circle(width/4+60, height/3,settings.radius);
     circle(width/4+120, height/3,settings.radius);
 

    // gelbe Linie
    fill(gelb);
    noStroke();

    if(width / 6 -150 > settings.ballx){
        rect(width / 6 -150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6  > settings.ballx){
        rect(width / 6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 150  > settings.ballx){
        rect(width / 6 +150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }

    if(width / 6 +300 > settings.ballx){
        rect(width / 6+300, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 +450 > settings.ballx){
        rect(width / 6 +450, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 600  > settings.ballx){
        rect(width / 6+600, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }

    if(width / 6 +750 > settings.ballx){
        rect(width / 6+750, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 900  > settings.ballx){
        rect(width / 6+900, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }


    // Pac Man
    fill(gelb);
    noStroke();
    arc(settings.ballx, settings.bally, settings.pacmanx, settings.pacmany, radians(20), radians(320));
    //ellipse(settings.ballx, settings.bally, settings.radius);
    settings.ballx+=7;
}

function move_2(){
    background(0);
    fill(gelb);

    // Text PAC MAN
    textSize(settings.pacmany/1.3);
    text('PAC MAN', width / 15, settings.pacmany/1.2);
    textSize(settings.pacmany/3);
    fill(255)
    text('Level 2', width /1.3, settings.pacmany/1.2);

    // Spielfeld
    stroke(blau);
    strokeWeight(7),
    line(width / 15,settings.bally-settings.bally/2 , width / 15*14, settings.bally- settings.bally/2);
    line(width / 15,settings.bally + settings.bally/1.3, width / 15*14,settings.bally + settings.bally/1.3);
   
    noFill();
    rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    rect(width / 2.5, height/3, settings.pacmanx, settings.pacmany/3,settings.radius-10);
    rect(width/3, height/1.7, settings.pacmanx/3, settings.pacmany*1.2,settings.radius-10);
    rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    rect(width/2, height/1.6, settings.pacmanx/3, settings.pacmany/2,settings.radius-10);

    // Elemente
    fill(gruen);
    noStroke();
    circle(width/4, height/3,settings.radius);
    circle(width/4+60, height/3,settings.radius);
    circle(width/4+120, height/3,settings.radius);



    // gelbe Linie
    fill(gelb);
    noStroke();

    if(width / 6 -150 > settings.ballx){
        rect(width / 6 -150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6  > settings.ballx){
        rect(width / 6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 150  > settings.ballx){
        rect(width / 6 +150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }

    if(width / 6 +300 > settings.ballx){
        rect(width / 6+300, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 +450 > settings.ballx){
        rect(width / 6 +450, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 600  > settings.ballx){
        rect(width / 6+600, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }

    if(width / 6 +750 > settings.ballx){
        rect(width / 6+750, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 900  > settings.ballx){
        rect(width / 6+900, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }


    // Pac Man
    fill(gelb);
    noStroke();
    arc(settings.ballx, settings.bally, settings.pacmanx, settings.pacmany, radians(20), radians(320));
    //ellipse(settings.ballx, settings.bally, settings.radius);
    settings.ballx+=settings.stepx;
}

    
function move_3(){
    background(0);
    fill(gelb);

    // Text PAC MAN
    textSize(settings.pacmany/1.3);
    text('PAC MAN', width / 15, settings.pacmany/1.2);
    textSize(settings.pacmany/3);
    fill(255)
    text('Level 3', width /1.3, settings.pacmany/1.2);

    // Spielfeld
    stroke(blau);
    strokeWeight(7),
    line(width / 15,settings.bally-settings.bally/2 , width / 15*14, settings.bally- settings.bally/2);
    line(width / 15,settings.bally + settings.bally/1.3, width / 15*14,settings.bally + settings.bally/1.3);
   
    noFill();
    rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    rect(width / 2.5, height/3, settings.pacmanx, settings.pacmany/3,settings.radius-10);
    rect(width/3, height/1.7, settings.pacmanx/3, settings.pacmany*1.2,settings.radius-10);
    rect(width / 6 -150, height/3, settings.pacmanx*2, settings.pacmany/3,settings.radius-10);
    rect(width/2, height/1.6, settings.pacmanx/3, settings.pacmany/2,settings.radius-10);

     // Elemente
     fill(rot);
     noStroke();
     circle(width/4, height/3,settings.radius);
     circle(width/4+60, height/3,settings.radius);
     circle(width/4+120, height/3,settings.radius);
 
 

    // // gelbe Linie
    fill(gelb);
    noStroke();
    rect(width / 6 -150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6 +150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6+300, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6 +450, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6+600, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6+750, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    rect(width / 6+900, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);


    // gelbe Linie
    fill(gelb);
    noStroke();

    if(width / 6 -150 > settings.ballx){
        rect(width / 6 -150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6  > settings.ballx){
        rect(width / 6, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 150  > settings.ballx){
        rect(width / 6 +150, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }

    if(width / 6 +300 > settings.ballx){
        rect(width / 6+300, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 +450 > settings.ballx){
        rect(width / 6 +450, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 600  > settings.ballx){
        rect(width / 6+600, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }

    if(width / 6 +750 > settings.ballx){
        rect(width / 6+750, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }
    if(width / 6 + 900  > settings.ballx){
        rect(width / 6+900, height/2, settings.pacmanx/7, settings.pacmany/7, settings.radius-45);
    }


    // Pac Man
    fill(gelb);
    noStroke();
    arc(settings.ballx, settings.bally, settings.pacmanx, settings.pacmany, radians(20), radians(320));
    //ellipse(settings.ballx, settings.bally, settings.radius);
    settings.ballx+=settings.stepx;

    }   

function move_4(){
    background(0);
    fill(gelb);
    noStroke();
    // arc(width/2, height/2, width, height, 0, PI);

    // Text
    textSize(180);
    text('PAC MAN', width / 6 -150, 200);
    fill(blau);

    // gelbe Linie
    fill(gelb);
    noStroke();
    rect(width / 6 -150, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6 +150, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6+300, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6 +450, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6+600, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6+750, height/2, width/30, height/30, settings.radius-35);
    rect(width / 6+900, height/2, width/30, height/30, settings.radius-35);

    // Spielfeld
    strokeWeight(5);
    noFill();
    stroke(blau);
    rect(width/30, height/3, width/4, height/20,settings.radius-10);
    rect(width/2, height/6, width/20, height/4,settings.radius-10);

    // Pac Man
    fill(blau);
    noStroke();
    arc(settings.ballx, width/2, width/4, height/4, radians(20), radians(320));
    //ellipse(settings.ballx, settings.bally, settings.radius);
    settings.ballx+=30;
}