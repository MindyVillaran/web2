 //---------------------creating and programming the modal-------------

function displayModal(item) {
	var title = item.Name;  //creating variables with "item.Name", etc. 
	var	image = item.Image
    var year = item.Year;
	var caption = item.Description;
  
  $(".modal").empty();
   
  var $h3 = $("<h3>").text(title);
  var $image = $("<img class='modal-image'>").attr("src",image);
  var $year = $("<h4>").text(year);
  var $p = $("<p>").text(caption);
  var $container = $("<div class='container'>"); 

   $container.append($h3,$image,$year,$p);
   $(".modal").append($container);
   
   $(".overlay").show();
   $(".overlay").on("click",function(e) {
     hideModal();
   });
   $(".modal").show();
}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
} 

 //---------------------adding content with function and loop-------------



function addItem(item){    //need to create a function to access the data. "item" accesses the data sheet


var title = item.Name;  
var	image = item.Image

var $container = $(".gridContainer"); 
var $box = $("<div class='box'>");  
var $img = $("<img>").attr("src",image); 
var $overlay = $("<div class='imgOvelay'>") 
var $h2 = $("<h2>");
var $title = $("<span class='title'>").text(title); 


$box.attr("data-color",item.Color);
$box.attr("data-type",item.Type);	
$box.attr("data-acqusition",item.Acquisition);	// Adding/Setting the attribute of data category to the item's color, etc.

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



function addItems(data) {   
		for(var i = 0; i < data.length; i++) {	
		addItem(data[i]); 	
	}}

 //---------------------callback thing that should someday allow me to filter-------------

function callback(data) { 

  addItems(data);

  var myCollection = $(".item").collection({ 
    filters: { 
      "title": "h2",
      "color": "[data-color]",
	  "type": "[data-type]",
	  "acquisition": "[data-acquisition]"
    },

  });


  $(".color").on("click",function(e) {   //click handler for any button w class of category
      var color = $(this).data("color");  //retrieving category from filter button
      myCollection.filtered("color",color);  //filtering the items in myCollection that have that same category
	  
	 $("#filter-bar button.color").removeClass("selected");   //highlighting button
   	$(this).addClass("selected"); //highlighting button by adding class of selected
  });




  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {
      hideModal();
  });

}





