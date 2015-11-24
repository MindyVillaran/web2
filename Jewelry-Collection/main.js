var $container = $("#grid-container");  

var $box = $("<div class='box'>"); 

var $title = $("<h2>").text("Big Fancy Title");  //create new variables 
var $img = $("<img>").attr("src","images/img13.png");  //and add in static values


$box.append($img).append($title);  //append box itself w new variables

$container.append($box); 
