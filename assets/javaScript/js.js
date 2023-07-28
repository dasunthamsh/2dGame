
//character idle animation

var boy =  document.getElementById("boy");
idleImageNumber =0;
idleAnimationNumber=0;

    function  idleAnimation(){

        idleImageNumber = idleImageNumber+1;

        if(idleImageNumber==11){
            idleImageNumber =1;
    }

    boy.src = "assets/img/png/idle("+idleImageNumber+").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}


//character run animation-------------------------------------------------


var runImageNumber=0;
var runAniamtionNumber =0;
    function runAnimation(){

        runImageNumber=runImageNumber+1;

        if(runImageNumber==11){
            runImageNumber = 1;
        }

        boy.src = "assets/img/png/Run("+ runImageNumber +").png";
    }

    function runAnimationStart(){
       runAniamtionNumber = setInterval(runAnimation,100);
       clearInterval(idleAnimationNumber);  // Stop idle animation
    }

    //when press start boy start to running ------------------------------------

 function keyCheck(event){
    // alert(event.keyCode);
    // console.log(event);
     var keyCode = event.keyCode;

     if(keyCode==13){
         if(runAniamtionNumber==0){
             runAnimationStart();
         }

     }

     if (moveBackgroundAnimationId==0){
         moveBackgroundAnimationId = setInterval(moveBackground,100);
     }
 }

 //move background when boy runs------------------------------------


var backgraoundImagePositionX=0;
    moveBackgroundAnimationId=0;

    function moveBackground(){

        backgraoundImagePositionX = backgraoundImagePositionX -20;

        document.getElementById("background").style.backgroundPositionX = backgraoundImagePositionX + "px";

    }





