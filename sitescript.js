"use strict"; //Strengen Modus//
// test moddather rashed

var cookiesInfo = localStorage.cookiesInfo;

window.onload = function () {
    if (localStorage.getItem("currentMode") == "dark") {
        // Überprüfung des aktuellen Modus
        darkMode();
    } else if (localStorage.getItem("currentMode") == "bright") {
        brightMode();
    }

    if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) == "about.html") {
        // überprüft ob wir auf der about seite sind!!
        document.getElementById("wrapper").style.cssText = "width:1500px";
    }

    console.info("Aktueller Anzeigemodus " + localStorage.getItem("currentMode"));

    if (cookiesInfo != "true") {
        $("html").css("visibility", "hidden");
        alert("This site uses cookies to help you keep track of your progress. If you press OK, we can use your data within our company, for more information, read our terms and conditions.");
        $("html").css("visibility", "visible");
        localStorage.setItem("cookiesInfo", "true");
    }

    console.log(navigator.doNotTrack);
};

function handler() {
    try {
        document.getElementById("form").innerHTML = "<p align='center'>Daten wurden gesichert...<p>";
        localStorage.setItem("online", "true");

        //    var username = document.querySelector('#username').value;  // Just a Prototype for "Network" _____
        //    localStorage.setItem("username", username);                // Doesnt work properly, need php for retrieving User Data and so once

        if (localStorage.getItem("online") == "true") {
            window.open("cpp.html", "_self", "", "");
        }
        return false;
    } catch (error) {
        console.error("Abnormal Script Execution---");
    }
}

// Displaying modes

function darkMode() {
  // mit jQuery
  $("html").css("background-color","#000000");

  $("#imgi").attr("src", "img/ovrwhite.png");
  $("#img2").attr("src", "img/ovrwhite.png");
  $("#unterschrift").attr("src", "img/UnterschriftdarkMode.png");

  $("body").css({
    "color": "white",
    "background-color": "black",
  });


  $(".container a").css("color","white");

  $(".biggercontainer").css({
    "background-color": "#111112",
    "box-shadow": "0px 0px 3px white",
  });
  
  $("ul").css({
    "background-color": "#111112",
    "box-shadow": "0px 0px 3px white",

  });



  $(".biggercontainer div").css("border", "1px solid #fff");

  $("nav ul li a").removeClass("brightMode");
  $("nav ul li a").addClass("darkMode");



  localStorage.currentMode = "dark";
  localStorage["currentMode"] = "dark";
  localStorage.setItem("currentMode", "dark");
  console.log(
    "Anzeigemodus umgeändert in: " + localStorage.getItem("currentMode")
  );
  console.log(
    "Anzeigemodus " + localStorage.getItem("currentMode") + " wurde gesichert!"
  );
  $(".spalte").css("background","#111112");
  // jQuery - Ende
}

function brightMode() {
  // mit jQuery

  $("html").css("background-color","#f7f7f7");

  $("#imgi").attr("src", "img/overworklogo.png");
  $("#img2").attr("src", "img/overworklogo.png");
  $("#unterschrift").attr("src", "img/Unterschrift.png");

  $("body").css({
    "color": "black",
    "background-color": "#fafafa",
  });

  $(".spalte").css("background","#f7f7f7");


  $("ul").css({
    "background-color": "#f7f7f7",
    "box-shadow": "0px 0px 3px #111112",
  });

  $(".biggercontainer").css({
    "background-color": "#f7f7f7",
    "box-shadow": "0px 0px 3px #111112",
  });









  $(".biggercontainer div").css("border", "1px solid #000");

  $(".container a").css("color","black");

  $("nav ul li a").removeClass("darkMode");
  $("nav ul li a").addClass("brightMode");

  localStorage.currentMode = "bright";
  localStorage["currentMode"] = "bright";
  localStorage.setItem("currentMode", "bright");
  console.log(
    "Anzeigemodus umgeändert in: " + localStorage.getItem("currentMode")
  );
  console.log(
    "Anzeigemodus " + localStorage.getItem("currentMode") + " wurde gesichert!"
  );
}

// ** Displaying modes **

function showPassword() {
    var x = $("#pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

