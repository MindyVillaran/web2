$(".scroller").scrollFlight();

//---------------title--------------------

$(".title").on("arrived",function() {
  $(".title").addClass("title-arrived");
});

//---------------page one----------------

$(".by-now").on("arrived",function() {
  $(this).addClass("by-now-arrived");
}); 

//---------------page two----------------

$(".dont-leave").on("arrived",function() {
  $(this).addClass("dont-leave-arrived");
}); 

$(".img1").on("arriving",function() {
  $(this).addClass("img1-arriving");
}); 

$(".showerWater").on("arrived",function() {
  $(this).addClass("showerWater-arrived");
}); 

//---------------page three----------------

$(".but-what").on("arrived",function() {
  $(this).addClass("but-what-arrived");
}); 

//---------------page four-----------------


$(".hidden-or").on("arrived",function() {
  $(this).addClass("hidden-or-arrived");
}); 

$(".watering-can").on("arriving",function() {
  $(this).addClass("watering-can-arriving");
}); 

$(".water-drop").on("arrived",function() {
  $(this).addClass("water-drop-arrived");
}); 

//---------------page five----------------

$(".by-being").on("arrived",function() {
  $(this).addClass("by-being-arrived");
}); 


//---------------page six----------------
$(".as-with").on("arriving",function() {
  $(this).addClass("as-with-arriving");
}); 

$(".footleft").on("arriving",function() {
  $(this).addClass("footleft-arriving");
}); 

$(".footright").on("arrived",function() {
  $(this).addClass("footright-arrived");
}); 

//---------------page seven----------------
$(".and-if").on("arriving",function() {
  $(this).addClass("and-if-arriving");
}); 

$(".footleft-US").on("arriving",function() {
  $(this).addClass("footleft-US-arriving");
}); 

$(".footright-UK").on("arrived",function() {
  $(this).addClass("footright-UK-arrived");
}); 

//---------------page eight----------------

$(".but-theres").on("arrived",function() {
  $(this).addClass("but-theres-arrived");
}); 

//---------------page nine----------------

$(".Everyday-products").on("arrived",function() {
  $(this).addClass("Everyday-products-arrived");
}); 


//---------------page ten-----------------


$(".so-when").on("arrived",function() {
  $(this).addClass("so-when-arrived");
}); 

//$(".factory").on("arrivied",function() {
  //$(".factory").affix();	
  //$(".factory").addClass("factory-arriving");
  //}); 

$("#large").on("arrived",function() {
    $(".shirt").affix();	
}); 

$("#white-page").on("arriving",function() {
  $(".shirt").unaffix();
}); 

$("#green-page").on("rearriving",function() {
  $(".shirt").unaffix();
}); 


//---------------page eleven----------------

$(".Recycling-reduces").on("arriving",function() {
  $(this).addClass("Recycling-reduces-arriving");
}); 

$(".bubbles").on("arrived",function() {
  $(this).addClass("bubbles-arrived");
}); 

//---------------page fourteen----------------

$(".one-cup").on("arriving",function() {
  $(this).addClass("one-cup-arriving");
  $(".coffee").addClass("coffee-arrived");
}); 


$(".coffee-graph1").on("arrived",function() {
  $(this).addClass("coffee-graph1-arrived");
}); 

//---------------page fifteen----------------

$(".depending-on").on("arrived",function() {
  $(this).addClass("depending-on-arrived");
  $(".coffee-graph2").addClass("coffee-graph2-arrived");
}); 

//---------------page sixteen-----------------


$(".If-you").on("arriving",function() {
  $(this).addClass("If-you-arrived");
  $(".pot").addClass("pot-arriving");
}); 


$(".leaves").on("arrived",function() {
  $(this).addClass("leaves-arrived");
}); 
