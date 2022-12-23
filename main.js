   var canvas=document.getElementById("my_canvas");
   ctx=canvas.getContext("2d");
   var image=["alpha.png","num.png","arrow.png","speci.png"];
   var keyPress="";


   window.addEventListener("keydown",keyDown);

   function keyDown(e){
       keyPress=e.keyCode;
       console.log(keyPress);
        if((keyPress>=65 && keyPress<=90) || (keyPress>=97 && keyPress<=122)){
             alphaKey();
             document.getElementById("H2").innerHTML="You have pressed Alphabet Key";
             console.log("Alphabet Key");
        
            }

        if(keyPress>=48 && keyPress<=57){ 
             NumKey();
             document.getElementById("H2").innerHTML="You have pressed Number Key";
             console.log("Number Key");

        }

        if(keyPress>=37 && keyPress<=40){
            arrowKey();
            document.getElementById("H2").innerHTML="you have pressed Arrow key";
            console.log("Arrow Key");

        }

        if(keyPress=17,keyPress=18, keyPress=27){
            specialKey();
            document.getElementById("H2").innerHTML="you have pressed Special key";
            console.log("Special Key");

        }

       

    }

    function alphaKey(){
        ctx.drawImage(image[0],0,0,canvas.width,canvas.height);
        
    }
    function NumKey(){
        ctx.drawImage(image[1],0,0,canvas.width,canvas.height);
    }
    function arrowKey(){
        ctx.drawImage(image[2],0,0,canvas.width,canvas.height);
    }
    function specialKey(){
        ctx.drawImage(image[3],0,0,canvas.width,canvas.height);
    }
