noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/cCsV6HFJ/m.png");

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotposes);


}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
    image(clown_nose,noseX-10,noseY-10,30,30);
}
function take_snapshot(){
    save('pic1.png');
    
}
function modalLoaded(){
    console.log('poseNet Is Initialised');
}
function gotposes(results){
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x = "+ noseX);
            console.log("nose y = "+ noseY);
        }
}