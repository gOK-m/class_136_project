status = "";
function preload(){

}

function setup(){
    canvas = createCanvas(420, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 300);
}

function start(){
    objectDetector = ml5.objectDetector(modelLoaded, "cocossd");
    document.getElementById("status").innerHTML = "status: Detecting objects";
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}