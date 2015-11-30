var $container = $("#grid-container");  

var $box = $("<div class='box'>"); 
var $img = $("<img class='image'>").attr("src","images/img15.JPG");  //and add in static values
var $overlay = $("<div class='imgOvelay'>")
var $h2 = $("<h2>");  //create new variables 
var $title = $("<span class='title'>").text("Fancy Title");  //create new variables 


$h2.append($title)
$overlay.append($h2)
$box.append($img, $overlay)
$container.append($box)



var $container = $("#grid-container");  

var $box = $("<div class='box'>"); 
var $img = $("<img class='image'>").attr("src","images/img16.JPG");  //and add in static values
var $overlay = $("<div class='imgOvelay'>")
var $h2 = $("<h2>");  //create new variables 
var $title = $("<span class='title'>").text("Fancy Title");  //create new variables 


$h2.append($title)
$overlay.append($h2)
$box.append($img, $overlay)
$container.append($box)
