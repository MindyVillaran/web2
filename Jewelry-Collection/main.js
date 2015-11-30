function addItem(item){    //need to create a function to access the data. "item" accesses the data sheet

var title = item.Name;  //creating variables with "item.Name", etc. 
var	image = item.Image

var $container = $("#grid-container");  // create new variables to include and later append to the box
var $box = $("<div class='box'>"); 
var $img = $("<img class='image'>").attr("src",image); //pass in the variables for "item.Name"   
var $overlay = $("<div class='imgOvelay'>")
var $h2 = $("<h2>");  
var $title = $("<span class='title'>").text(title);  //pass in the variables for "item.Title"  

$h2.append($title)
$overlay.append($h2)
$box.append($img, $overlay)
$container.append($box)
}



function callback(data) { 
	console.log(data);	
	addItem(data[0]);
	addItem(data[1]);	
	addItem(data[3]);
	addItem(data[4]);
		addItem(data[8]);
}



