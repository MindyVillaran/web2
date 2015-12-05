 //---------------------creating and programming the modal-------------

	

var currentModal = null;

function displayModal(item, index) {
	var title = item.Name;  //creating variables with "item.Name", etc. 
	var	image = item.Image
    var year = item.Year;
	var caption = item.Description;
  
  $(".modal").empty();
  
  currentModal = index;
   
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


function addItem(item, index){    //create a function to access the data. "item" accesses the data sheet

var title = item.Name;  
var	image = item.Image

var $container = $(".gridContainer"); 
var $box = $("<div class='box'>").addClass("item").addClass(item.Color.toLowerCase()).addClass(item.Type.toLowerCase()).addClass(item.Acquisition.toLowerCase());   
var $img = $("<img>").attr("src",image); 
var $overlay = $("<div class='imgOvelay'>") 
var $h2 = $("<h2>");
var $title = $("<span class='title'>").text(title); 


$box.attr("data-color",item.Color);
$box.attr("data-year",item.Year);
$box.attr("data-type",item.Type);	
$box.attr("data-acquisition",item.Acquisition);	

$h2.append($title)
$overlay.append($h2)
$box.append($img, $overlay)
$container.append($box)

$box.on("click",function(e) { 
	$(".overlay").show();
	displayModal(item,index);
	});	

$(".overlay").on("click",function(e) { 
 $(this).hide()
	});
}


var dataItems;

function addItems(data) { 
  		dataItems = data;
		for(var i = 0; i < data.length; i++) {	
		addItem(data[i],i); 	
	}} 

	

 //---------------------callback that allows filtering-------------


function callback(data) { 

  addItems(data);

//---packery----
  var $container = $('.gridContainer');
  $container.packery({
    itemSelector: '.item',
  });
//---packery----
  
  
  var myCollection = $(".item").collection({ 
    filters: { 
     "name": "h2",
      "year": "[data-year]",
      "color": "[data-color]",
	  "type": "[data-type]",
	  "acquisition": "[data-acquisition]"
    },

//---packery----
update: function() { 
  $container.packery(); 
  setTimeout(function() { $container.packery()},600);
},
ordered: function() {
  $container.packery('reloadItems');
  console.log("Whoa");
},
hide: function($elem) { $elem.hide(); },
show: function($elem) { $elem.fadeIn(500); },
//---packery----

});



  $(".color").on("click",function(e) {   //click handler for any button w class of color
      var color = $(this).data("color");  //retrieving color from filter button
      myCollection.filtered("color",color);  //filtering the items in myCollection that have that same category
      $("button.color").removeClass("selected");
      $(this).addClass("selected");
  });  
  
  $(".type").on("click",function(e) { 
      var type = $(this).data("type"); 
      myCollection.filtered("type",type); 
      $("button.type").removeClass("selected");
      $(this).addClass("selected");
  });
  
  
  $(".acquisition").on("click",function(e) {
      var acquisition = $(this).data("acquisition");  
      myCollection.filtered("acquisition",acquisition); 
      $("button.acquisition").removeClass("selected");
      $(this).addClass("selected");
  });
  
  
  
  $(".order").on("click",function(e) {
      var order = $(this).data("order");
      myCollection.ordered(order);
      $("button.order").removeClass("selected");
      $(this).addClass("selected");
  });



  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {
      hideModal();
  });

}

 //---------------------make things with key commands-------------


key('right', function(){
  if(currentModal === null) return;
  var nextModal = currentModal + 1;
  
  if(nextModal >= dataItems.length) return;
  
  displayModal(dataItems[nextModal], nextModal);
});

key('left', function(){
  if(currentModal === null) return;
  var prevModal = currentModal - 1;
  
  if(prevModal < 0) return;
  
  displayModal(dataItems[prevModal], prevModal);
});




