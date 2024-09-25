var game

function setup(){
    pixelDensity(1)
    createCanvas(windowWidth, windowHeight)
    game = new Game(10)
}

function modure(){
    strokeWeight(10)
    stroke('black')
    noFill()
    rect(0,0,windowWidth, windowHeight)
    strokeWeight(1)
}

function draw(){
    modure()
    game.gprint(windowWidth/8, windowHeight-20, windowWidth*0.75)
}