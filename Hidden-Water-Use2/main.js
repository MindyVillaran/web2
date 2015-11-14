$(".scroller").scrollFlight();

//----------------type-styles--------------------

$(".title").on("arrived",function() {
  $(".title").addClass("title-arrived");
});

$(".pull-quote1").on("arrived",function() {
  $(this).addClass("pull-quote1-arrived");
}); 

$(".pull-quote2").on("arrived",function() {
  $(this).addClass("pull-quote2-arrived");
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


$(".scroller").scrollFlight();

$("#green-page").on("departed",function(e) {
    $(".shirt").affix();
});


$("#green-page").on("rearriving",function(e) {
    $(".shirt").unaffix();
});


$("#white-page").on("arriving",function(e) {
    $(".shirt").release();
});


$("#large").on("departed",function(e) {
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
