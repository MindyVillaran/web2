function displayModal(item) {
	var title = item.Name;  //creating variables with "item.Name", etc. 
	var	image = item.Image
    var year = item.Year;
	var caption = item.Description;
  
  $(".modal").empty();
   
  var $h3 = $("<h3>").text(title);
  var $image = $("<img class='modal-image'>").attr("src",image);
  var $year = $("<p>").text(year);
  var $p = $("<p>").text(caption);

   $(".modal").append($h3,$image,$year,$p);
   
   
   $(".overlay").show();
   $(".overlay").on("click",function(e) {
     hideModal();
   });
   $(".modal").show();
}


function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}  //creating and programming the modal  


function callback(data) {   //add loop to fill in all the content dynamically from Google sheet
		for(var i = 0; i < data.length; i++) {	
		addItem(data[i]); 	
	}}
	

function addItem(item){    //need to create a function to access the data. "item" accesses the data sheet

var title = item.Name;  //creating variables with "item.Name", etc. 
var	image = item.Image

var $container = $("#grid-container");  // create new variables to include and later append to the box
var $box = $("<div class='box'>");  //create other elements that aren't unique to item
var $img = $("<img>").attr("src",image); //pass in the variables for "item.Name"   
var $overlay = $("<div class='imgOvelay'>") //create other elements that aren't unique to item
var $h2 = $("<h2>");  //create other elements that aren't unique to item
var $title = $("<span class='title'>").text(title);  //pass in the variables for "item.Title"  

$h2.append($title)
$overlay.append($h2)
$box.append($img, $overlay)
$container.append($box)

$box.on("click",function(e) { 
	$(".overlay").show();
	displayModal(item);
	});	

$(".overlay").on("click",function(e) { 
 $(this).hide()
	});
}





