
//character idle animation

var boy =  document.getElementById("boy");
idleImageNumber =1;
idleAnimationNumber=0;

    function  idleAnimation(){

        idleImageNumber = idleImageNumber+1;

        if(idleImageNumber==11){
            idleImageNumber =1;
    }

    boy.src = "assets/img/png/idle("+idleImageNumber+").png";
        // src = this is use to specify source in a displaying image without html element

}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,100);
}


//character run animation-------------------------------------------------


var runImageNumber=1;
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


// character jump animation --------------------------------------------

jumpAnimationNumber = 0;
jumpImageNumber = 0;
 boyMarginTop=450;

function jumpAnimation(){

    jumpImageNumber = jumpImageNumber +1;


    if(jumpImageNumber<=6){
        boyMarginTop = boyMarginTop-20;
        boy.style.marginTop = boyMarginTop+"px";
    }

    if(jumpImageNumber >=7){
        boyMarginTop = boyMarginTop +20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if(jumpImageNumber==11){
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber = 0;
        runAnimationStart();
    }

    boy.src = "assets/img/png/Jump("+ jumpImageNumber +").png";
}

function jumpAnimationStart(){
        clearInterval(idleAnimationNumber);
        runImageNumber=0;
        clearInterval(runAniamtionNumber);
        jumpAnimationNumber = setInterval(jumpAnimation,50);
}



 function keyCheck(event){
      // alert(event.keyCode);
    // console.log(event);
     var keyCode = event.keyCode;


     //when press enter boy start to running ------------------------------------

     if(keyCode==13){

         if (moveBackgroundAnimationId==0){
             moveBackgroundAnimationId = setInterval(moveBackground,100);
         }
         if(runAniamtionNumber==0){
             runAnimationStart();
         }

         if(boxAnimationId==0){   // Start barriers animation
             boxAnimationId = setInterval(boxAnimation,100);
         }

     }

//when press space boy start to jump ------------------------------------

     if(keyCode==32){
         if(jumpAnimationNumber==0){
             jumpAnimationStart();
         }
         if (moveBackgroundAnimationId==0){    // Start background animation
             moveBackgroundAnimationId = setInterval(moveBackground,100);
         }

         if(boxAnimationId==0){   // Start barriers animation
             boxAnimationId = setInterval(boxAnimation,100);
         }
     }

 }

 //move background when boy runs------------------------------------


var backgraoundImagePositionX=0;
    moveBackgroundAnimationId=0;

    var score = 0;

    function moveBackground(){

        backgraoundImagePositionX = backgraoundImagePositionX -20;

        document.getElementById("background").style.backgroundPositionX = backgraoundImagePositionX + "px";

        score = score+1;
        document.getElementById("sore").innerHTML=score;
    }


// generate  barriers ----------------------------------------------------------------

boxMarginLeft  = 1600;

    function createBoxes(){

        for(var i=0; i<10; i++){

            var box =  document.createElement("div");
            box.className = "box";
            document.getElementById("background").append(box);
            box.style.marginLeft = boxMarginLeft + "px";
            box.id = "box"+i;



            if(i<5){    //  level one --

                boxMarginLeft = boxMarginLeft + 1000;

            }
            if(i=>5){    //  level tow --

                boxMarginLeft = boxMarginLeft + 800;


            }

        }

    }

    var boxAnimationId = 0;

    function boxAnimation(){  // barriers come to left

        for (var i =0; i<10; i++){
            var box = document.getElementById("box" + i);
            var  currentMarginLeft = getComputedStyle(box).marginLeft;
            var newMarginLeft = parseInt(currentMarginLeft) - 25;
            box.style.marginLeft = newMarginLeft + "px";


            if(newMarginLeft >=-110 & newMarginLeft <= 100){
                if(boyMarginTop > 300){
                    clearInterval(boxAnimationId);

                    clearInterval(runAniamtionNumber);
                    runAniamtionNumber = -1;

                    clearInterval(moveBackgroundAnimationId);
                    moveBackgroundAnimationId = -1;

                    clearInterval(jumpAnimationNumber);
                    moveBackgroundAnimationId =-1;

                   boyDeadAnimationNumber  = setInterval(boyDeadAnimation,100);
                }
            }
        }
    }

    deadImageNumber = 1;
boyDeadAnimationNumber = 0;
function boyDeadAnimation(){

    deadImageNumber = deadImageNumber+1;

    if(deadImageNumber == 11){
        deadImageNumber =10;
    }

        boy.src = "assets/img/png/Dead("+ deadImageNumber +").png"
}
