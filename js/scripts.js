//User Interface logic
$(document).ready(function(){
  $(".one").click(function(){
    $(".nav-link").removeClass("selected");
    $(".one").addClass("selected");
    $(".screen").fadeOut();
    $(".kenyan").fadeIn();
  });
  $(".two").click(function(){
    $(".nav-link").removeClass("selected");
    $(".two").addClass("selected");
    $(".screen").fadeOut();
    $(".football").fadeIn();
  });
  $(".three").click(function(){
    $(".nav-link").removeClass("selected");
    $(".three").addClass("selected");
    $(".screen").fadeOut();
    $(".childhood").fadeIn();
  });
  $(".four").click(function(){
    $(".nav-link").removeClass("selected");
    $(".four").addClass("selected");
    $(".screen").fadeOut();
    $(".nigerian").fadeIn();
  });
  $(".five").click(function(){
    $(".nav-link").removeClass("selected");
    $(".five").addClass("selected");
    $(".screen").fadeOut();
    $(".anime").fadeIn();
  });
  $(".six").click(function(){
    $(".nav-link").removeClass("selected");
    $(".six").addClass("selected");
    $(".screen").fadeOut();
    $(".school").fadeIn();
  });
  $(".seven").click(function(){
    $(".nav-link").removeClass("selected");
    $(".seven").addClass("selected");
    $(".screen").fadeOut();
    $(".politics").fadeIn();
  });
  $(".eight").click(function(){
    $(".nav-link").removeClass("selected");
    $(".eight").addClass("selected");
    $(".screen").fadeOut();
    $(".stoners").fadeIn();
  });
  $(".nine").click(function(){
    $(".nav-link").removeClass("selected");
    $(".nine").addClass("selected");
    $(".screen").fadeOut();
    $(".motivational").fadeIn();
  });
  $(".ten").click(function(){
    $(".nav-link").removeClass("selected");
    $(".ten").addClass("selected");
    $(".screen").fadeOut();
    $(".university").fadeIn();
  });
  $(".eleven").click(function(){
    $(".nav-link").removeClass("selected");
    $(".eleven").addClass("selected");
    $(".screen").fadeOut();
    $(".others").fadeIn();
  });
  $(".login").click(function(){
    $(".login-block").toggle();
    $(".trends").toggle();
  })
  $(".sign").click(function(){
    $(".login-block").hide();
    $(".signup-block").show();
  })
});

var elements = document.getElementsByClassName("column");
var i;

function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";
    elements[i].style.flex = "100%";
    $(document).ready(function(){
      $(".height").removeClass("equal");
    });
  }
}

function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";
    elements[i].style.flex = "50%";
    $(document).ready(function(){
      $(".height").removeClass("equal");
    });
  }
}

function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "33%";
    elements[i].style.flex = "33%";
    $(document).ready(function(){
      $(".height").removeClass("equal");
    });
  }
}



function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";
    elements[i].style.flex = "25%";
    $(document).ready(function(){
      $(".height").removeClass("equal");
    });
  }
}
function same() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";
    elements[i].style.flex = "25%";
    $(document).ready(function(){
      $(".height").addClass("equal");
    });
  }
}

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
