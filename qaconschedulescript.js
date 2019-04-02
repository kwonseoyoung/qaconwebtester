$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 18) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 15) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});

function myFunction() {
  var text;
  var fruits = document.getElementById("myInput").value;

  switch(fruits) {
    case "Banana":
      text = "Banana is good!";
    break;
    case "Orange":
    text = "I am not a fan of orange.";
    break;
    case "Apple":
    text = "How you like them apples?";
    break;
    default:
    text = "I have never heard of that fruit...";
  }
  document.getElementById("demo").innerHTML = text;
}