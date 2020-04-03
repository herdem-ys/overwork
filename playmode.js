 'use strict';



 window.onload = function(){
     
     if(localStorage.getItem("online")=="true"){
             try {
                if(localStorage.getItem("currentMode")=="dark"){
                        darkMode();
                } else if(localStorage.getItem("currentMode")=="bright"){
                        brightMode();
                }

             } finally{
                try {
                        btnSet();     
                        checkProgress();       
                } catch (error) {
                        console.info("buttons cant be set!");
                }

             }

     } 
      
     if(localStorage.getItem("online")!="true"){
        window.open("learn.html","_self","","");
     }
     
        
     
     


 }
 

function btnSet(){
        var btn__next = document.getElementById("btn_next");
        var btn__prev = document.getElementById("btn_previous");
        btn__next.addEventListener("click", function(e) {             
                console.info("next button pressed!");                       
                var progress = Number(localStorage.getItem("progress"));
                localStorage.setItem("progress", ++progress);
                console.info(localStorage.getItem("progress"));
                checkProgress();
        }, false); 
        btn__prev.addEventListener("click", function(e) {             
                console.info("previous button pressed!");
                var progress = Number(localStorage.getItem("progress"));
                localStorage.setItem("progress", --progress);
                console.info(localStorage.getItem("progress"));
                checkProgress();

        }, false); 
}


function checkProgress(){
        if(localStorage.getItem("progress")=="1"){
                document.getElementById("last").innerHTML = "<p>Test1</p><button id='btn_previous' align='left' >PREVIOUS</button> <button id='btn_next' align='right' >NEXT</button>";
                btnSet();        
        } else if(localStorage.getItem("progress")=="2"){
               document.getElementById("last").innerHTML = "<p>Test2</p><button id='btn_previous' align='left' >PREVIOUS</button> <button id='btn_next' align='right' >NEXT</button>";
               btnSet();        
        } else if(localStorage.getItem("progress")=="3"){
                document.getElementById("last").innerHTML = "<p>Test3</p><button id='btn_previous' align='left' >PREVIOUS</button> <button id='btn_next' align='right' >NEXT</button>"; 
                btnSet();        
        } else if(localStorage.getItem("progress")=="4"){
                document.getElementById("last").innerHTML = "<p>Test4</p><button id='btn_previous' align='left' >PREVIOUS</button> <button id='btn_next' align='right' >NEXT</button>";
                btnSet();  
        } else if(localStorage.getItem("progress")=="0"){


                btnSet();  
        }

              // Als sicherheitsgrundlage!!
        if(localStorage.getItem("progress")=="-1"){
                localStorage.setItem("progress", "0");
        }      
}