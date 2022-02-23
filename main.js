song = "";
status = "";
objects = [];
function preload(){

}

function setup(){
    canvas = createCanvas(240,240);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(240,240);
   
}

function draw(){
    image(video,0,0,380,380);

   }

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    finder = document.getElementById("input").value;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video,gotResult);
}