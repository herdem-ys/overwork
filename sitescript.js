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

  if (
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1) ==
    "about.html"
  ) {
    // überprüft ob wir auf der about seite sind!!
    document.getElementById("wrapper").style.cssText = "width:1500px";
  }

  console.info("Aktueller Anzeigemodus " + localStorage.getItem("currentMode"));

  if (cookiesInfo != "true") {
    $("html").css("visibility", "hidden");
    alert(
      "This site uses cookies to help you keep track of your progress. If you press OK, we can use your data within our company, for more information, read our terms and conditions."
    );
    $("html").css("visibility", "visible");
    localStorage.setItem("cookiesInfo", "true");
  }

  console.log(navigator.doNotTrack);
};

function handler() {
  try {
    document.getElementById("form").innerHTML =
      "<p align='center'>Daten wurden gesichert...<p>";
    localStorage.setItem("online", "true");

    //    var username = document.querySelector('#username').value;  // FUNKTIONIERT NOCH NICHT REIBUNGSLOS
    //    localStorage.setItem("username", username);                // FUNKTIONIERT NOCH NICHT REIBUNGSLOS

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

  $("#imgi").attr("src", "img/ovrwhite.png");
  $("#img2").attr("src", "img/ovrwhite.png");
  $("#unterschrift").attr("src", "img/UnterschriftdarkMode.png");

  $("body").css({
    color: "white",
    "background-color": "black",
  });

  $(".biggercontainer").css({
    "background-color": "black",
    "border-left": "2px white solid",
    "border-right": "2px white solid",
    "border-bottom": "2px white solid",
  });
  $("ul").css({
    "background-color": "#000000",
    "border-top": "2px solid white",
    "border-bottom": "2px solid white",
  });

  $(".biggercontainer div").css("border", "1px solid #fff");

  $("nav ul li a").mouseover(function () {
    $(this).addClass("darkMode_hover");
    $("nav ul li:eq(3)").click(function () {
      $(this).removeClass("darkMode_hover");
    });
  });

  $("nav ul li a").mouseleave(function () {
    $(this).removeClass("darkMode_hover");
  });

  localStorage.currentMode = "dark";
  localStorage["currentMode"] = "dark";
  localStorage.setItem("currentMode", "dark");
  console.log(
    "Anzeigemodus umgeändert in: " + localStorage.getItem("currentMode")
  );
  console.log(
    "Anzeigemodus " + localStorage.getItem("currentMode") + " wurde gesichert!"
  );

  // jQuery - Ende
}

function brightMode() {
  // mit jQuery
  $("#imgi").attr("src", "img/overworklogo.png");
  $("#img2").attr("src", "img/overworklogo.png");
  $("#unterschrift").attr("src", "img/Unterschrift.png");

  $("body").css({
    color: "black",
    "background-color": "white",
  });

  $("ul").css({
    "background-color": "#ffffff",
    "border-top": "2px solid black",
    "border-bottom": "2px solid black",
  });

  $(".biggercontainer").css({
    "background-color": "white",
    "border-left": "2px black solid",
    "border-right": "2px black solid",
    "border-bottom": "2px black solid",
  });

  $(".biggercontainer div").css("border", "1px solid #000");

  $("nav ul li a").mouseover(function () {
    $(this).addClass("brightMode_hover");
    $("nav ul li:eq(4)").click(function () {
      $(this).removeClass("brightMode_hover");
    });
  });

  $("nav ul li a").mouseleave(function () {
    $(this).removeClass("brightMode_hover");
  });

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
