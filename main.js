noseX = 0;
noseY = 0;
leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized')
}

function draw(){
    document.getElementById("square_sides").innerHTML = "THe Width And Height Of The square Is : "+ difference + " px ";
    background("#808080");
    fill('#31BCEC');
    stroke('#31BCEC');
    square(noseX,noseY,difference);
}

function gotPoses(results){
  if(results.length>0){
     console.log(results)
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;

     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
     console.log("difference" + difference);

  }
}