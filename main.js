x=0;
y=0;
draw_square="";
draw_ret="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="the system is listening";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech has been recognized as: "+content;
    if(content=="rectangle"||content=="Rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="the system has started drawing rectangle";
        draw_ret="bob";
    }
    if(content=="square"||content=="Square"){
        x=Math.floor(Math.random()*600);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="the system has started drawing square";
        draw_square="bob";
}
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_square=="bob"){
        rect(x,y,70,70);
        document.getElementById("status").innerHTML="square is drawn";
        draw_square="";
    }
    if(draw_ret=="bob"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        draw_ret="";
    }
}