var $container = $(".container");

var $box = $("<div class='box'>");

var $heading = $("<h2>").text(Big Fancy Title);
var $img = $("<img>").attr("src","images/img1.png");

$box.append($heading).append($img).append($caption);

$container.append($box);