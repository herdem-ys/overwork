'use strict'; //Strengen Modus für Fehlererkennung-->//


window.onload = function() {
        if(localStorage.getItem("currentMode")=="dark"){
                darkMode();
        } else if(localStorage.getItem("currentMode")=="bright"){
                brightMode();
        }
        console.info("Aktueller Anzeigemodus " + localStorage.getItem("currentMode"));
        

        document.getElementById("last").style.visibility = 'hidden';
        alert("This site uses cookies to help you keep track of your progress. If you press OK, we can use your data within our company, for more information, read our terms and conditions.");
        document.getElementById("last").style.visibility = 'visible';


};


function handler() {


        try {
                document.getElementById('form').innerHTML = "<p align='center'>Daten wurden gesichert...<p>";
                localStorage.setItem("online", "true");   
                
            //    var username = document.querySelector('#username').value;  // FUNKTIONIERT NOCH NICHT REIBUNGSLOS
            //    localStorage.setItem("username", username);                // FUNKTIONIERT NOCH NICHT REIBUNGSLOS
                 

                if(localStorage.getItem("online")=="true"){
                        window.open("cpp.html","_self","","");
                }
                return false;       
        } catch (error) {
               console.error("Abnormal Script Execution---"); 
        }

}

function darkMode() {
        $("p").css("color:white");
        try {
                document.getElementById('imgi').src = "img/ovrwhite.png";
                document.getElementById('img2').src = "img/ovrwhite.png";
                document.getElementById('unterschrift').src = "img/UnterschriftdarkMode.png";
                        /* NAVIGATIONSHOVERSEGMENTE*/


                        
                document.getElementById("langname").style.cssText = "color: white";
                document.getElementById("langname2").style.cssText = "color: white";
                document.getElementById("langname3").style.cssText = "color: white";
                document.getElementById("langname4").style.cssText = "color: white";
                document.getElementById("langname5").style.cssText = "color: white";
                document.getElementById("langname6").style.cssText = "color: white";
                document.getElementById("langname7").style.cssText = "color: white";
                document.getElementById("langname8").style.cssText = "color: white";
                document.getElementById("langname9").style.cssText = "color: white";
                document.getElementById("lnbr").style.cssText = "color: white";
                document.getElementById("lnbr2").style.cssText = "color: white";
                document.getElementById("containerLangs1").style.cssText = "border: 1px solid white";
                document.getElementById("containerLangs2").style.cssText = "border: 1px solid white";
                document.getElementById("containerLangs3").style.cssText = "border: 1px solid white";
                document.getElementById("hrLine").style.cssText = "border: 1px solid white";
        
                        /* NAVIGATIONSHOVERSEGMENTE*/
        }  finally{
                try {
                        document.getElementById("camaro").onmouseover = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                
                        document.getElementById("camaro").onmouseout = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                
                        document.getElementById("camaro2").onmouseover = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                
                        document.getElementById("camaro2").onmouseout = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                
                        document.getElementById('einul').style.cssText = "background: black;color:white;border-bottom:1px solid white;border-top:1px solid white";
                        document.getElementById("li1").onmouseover = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                        document.getElementById("li1").onmouseout = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                
                
                        document.getElementById("li2").onmouseover = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                        document.getElementById("li2").onmouseout = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                
                
                        document.getElementById("li3").onmouseover = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                                }
                                
                        document.getElementById("li3").onmouseout = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                                }
                } finally  {
                        document.getElementById('last').style.cssText = "background-color: black;color:white;border-left: 1px white solid;border-right: 1px white solid;border-bottom: 1px white solid;";

                        localStorage.currentMode = 'dark';
                        localStorage['currentMode'] = 'dark';
                        localStorage.setItem('currentMode', 'dark');
                        console.log("Anzeigemodus umgeändert in: " +  localStorage.getItem("currentMode"));
                        console.log("Anzeigemodus " + localStorage.getItem("currentMode") + " wurde gesichert!");
                        return false;  
                }                  

                        

        }
 
}
function brightMode() {
        try {
                document.getElementById('imgi').src = "img/overworklogo.png";
                document.getElementById('img2').src = "img/overworklogo.png";
                document.getElementById('unterschrift').src = "img/Unterschrift.png";


                document.getElementById("langname").style.cssText = "color: black";
                document.getElementById("langname2").style.cssText = "color: black";
                document.getElementById("langname3").style.cssText = "color: black";
                document.getElementById("langname4").style.cssText = "color: black";
                document.getElementById("langname5").style.cssText = "color: black";
                document.getElementById("langname6").style.cssText = "color: black";
                document.getElementById("langname7").style.cssText = "color: black";
                document.getElementById("langname8").style.cssText = "color: black";
                document.getElementById("langname9").style.cssText = "color: black";
                document.getElementById("lnbr").style.cssText = "color: black";
                document.getElementById("lnbr2").style.cssText = "color: black";
                document.getElementById("containerLangs1").style.cssText = "border: 1px solid black";
                document.getElementById("containerLangs2").style.cssText = "border: 1px solid black";
                document.getElementById("containerLangs3").style.cssText = "border: 1px solid black";
                document.getElementById("hrLine").style.cssText = "border: 1px solid black";

        } finally{
                try {
                        document.getElementById('einul').style.cssText = "background: white;color:black;border-bottom:2px solid black;border-top:2px solid black";

                        document.getElementById("camaro").onmouseover = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                        document.getElementById("camaro").onmouseout = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                        document.getElementById("camaro2").onmouseover = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                        document.getElementById("camaro2").onmouseout = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                
                        }
                        document.getElementById("li1").onmouseover = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                        document.getElementById("li1").onmouseout = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                
                
                        document.getElementById("li2").onmouseover = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                        document.getElementById("li2").onmouseout = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                
                
                        document.getElementById("li3").onmouseover = function() {
                                this.style.backgroundColor = "black";
                                this.style.color = "white";
                        }
                        document.getElementById("li3").onmouseout = function() {
                                this.style.backgroundColor = "white";
                                this.style.color = "black";
                        }
                } finally {
                        document.getElementById('last').style.cssText = "background-color: white;color:black;";  
                        localStorage.currentMode = 'bright';
                        localStorage['currentMode'] = 'bright';
                        localStorage.setItem('currentMode', 'bright');
                        console.log("Anzeigemodus umgeändert in: " +  localStorage.getItem("currentMode"));
                        console.log("Anzeigemodus " + localStorage.getItem("currentMode") + " wurde gesichert!");
                        return false;
                }



        }

  
 


}

function showPassword() {
        var x = document.getElementById("pass");
        if (x.type === "password") {
                x.type = "text";
        } else {
                x.type = "password";
        }
}