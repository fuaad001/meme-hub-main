//User Interface logic
$(document).ready(function(){
  $(".one").click(function(){
    $(".nav-link").removeClass("selected");
    $(".one").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".kenyan").fadeIn();
  });
  $(".two").click(function(){
    $(".nav-link").removeClass("selected");
    $(".two").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".football").fadeIn();
  });
  $(".three").click(function(){
    $(".nav-link").removeClass("selected");
    $(".three").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".childhood").fadeIn();
  });
  $(".four").click(function(){
    $(".nav-link").removeClass("selected");
    $(".four").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".nigerian").fadeIn();
  });
  $(".five").click(function(){
    $(".nav-link").removeClass("selected");
    $(".five").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".anime").fadeIn();
  });
  $(".six").click(function(){
    $(".nav-link").removeClass("selected");
    $(".six").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".school").fadeIn();
  });
  $(".seven").click(function(){
    $(".nav-link").removeClass("selected");
    $(".seven").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".politics").fadeIn();
  });
  $(".eight").click(function(){
    $(".nav-link").removeClass("selected");
    $(".eight").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".stoners").fadeIn();
  });
  $(".nine").click(function(){
    $(".nav-link").removeClass("selected");
    $(".nine").addClass("selected");
    $(".col-md-10").fadeOut();
    $(".motivational").fadeIn();
  });
  $(".ten").click(function(){
    $(".nav-link").removeClass("selected");
    $(".ten").addClass("selected");
    $(".col-md-10").fadeOut();
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
var elements = $(".column");
var i;
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";
    elements[i].style.flex = "100%";
  }
}

function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";
    elements[i].style.flex = "50%";
  }
}

function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "33%";
    elements[i].style.flex = "33%";
  }
}

function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";
    elements[i].style.flex = "25%";
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
// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//Business logic
