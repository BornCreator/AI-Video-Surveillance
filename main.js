var x=[];
var status='';
var video='';
function preload(){video=createVideo('video.mp4');video.hide();}
function setup(){
    canvas=createCanvas(450,400);
    canvas.center();
}
function draw(){
    image(video,0,0,450,400);
    if(status!=''){
        objectDetection.detect(video,gotResult);
        for(var thisisavariable=0;thisisavariable<x.length;thisisavariable++){
            document.getElementById('status').innerHTML='STAtus: ObjeCTS Detected work complete now go away';
            document.getElementById('numberOfObjects').innerHTML='NumberofoBjects detected is this right here: '+x.length;
            fill(255,0,255);
            percentage=floor(x[thisisavariable].confidence*100)+'%';
            text(x[thisisavariable].label+' '+percentage,x[thisisavariable].x,x[thisisavariable].y);
            stroke(3,4,5);
            noFill();
            rect(x[thisisavariable].x,x[thisisavariable].y,x[thisisavariable].width,x[thisisavariable].height);
        }
    }
}
function start(){
    objectDetection=ml5.objectDetector('cocossd',modeloaded);
    document.getElementById('status').innerHTML='Status: Detecting 0bjects';
}
function modeloaded(){
    console.log('model is lodaded');
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error,results)
{
    if(error)


    {


        console.log(error);


    }


    else


    {


        console.log(results);


        x=results;


    }
}