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

$(".left").on("arrived",function() {
  $(this).addClass("left-arrived");
}); 

$(".right").on("arrived",function() {
  $(this).addClass("right-arrived");
}); 

$(".center").on("arrived",function() {
  $(this).addClass("center-arrived");
}); 
//---------------page two----------------

$(".img1").on("arriving",function() {
  $(this).addClass("img1-arriving");
}); 

$(".showerWater").on("arrived",function() {
  $(this).addClass("showerWater-arrived");
}); 

$(".steam").on("arrived",function() {
  $(this).addClass("steam-arrived");
}); 

$("#page1").on("departed",function(e) {
    $(".img1").affix();
	$(".showerWater").affix();
	$(".steam").affix();
});

$("#page1").on("rearriving",function(e) {
    $(".img1").unaffix();
	$(".showerWater").unaffix();
	$(".steam").unaffix();
});

$("#page2b").on("departing",function(e) {
    $(".img1").release();
	$(".showerWater").release();
	$(".steam").release();
});
//---------------page four-----------------

$(".watering-can").on("arriving",function() {
  $(this).addClass("watering-can-arriving");
}); 

$(".water-drop").on("arrived",function() {
  $(this).addClass("water-drop-arrived");
}); 


//---------------page six----------------

$(".footleft").on("arriving",function() {
  $(this).addClass("footleft-arriving");
}); 

$(".footright").on("arrived",function() {
  $(this).addClass("footright-arrived");
}); 

//---------------page seven----------------

$(".footleft-US").on("arriving",function() {
  $(this).addClass("footleft-US-arriving");
}); 

$(".footright-UK").on("arrived",function() {
  $(this).addClass("footright-UK-arrived");
}); 


//---------------page ten-----------------


$("#page9").on("departed",function(e) {
    $(".shirt").affix();
});

$("#page9").on("rearriving",function(e) {
    $(".shirt").unaffix();
});

$("#page11").on("arrived",function(e) {
    $(".shirt").release();
});


//$("#page10c").on("departed",function(e) {
  //  $(".shirt").unaffix();
  //});


//---------------page eleven----------------

$(".bubbles").on("arrived",function() {
  $(this).addClass("bubbles-arrived");
}); 

//---------------page fourteen----------------

$(".coffee").on("arriving",function() {
  $(this).addClass("coffee-arrived");
}); 


$(".coffee-graph1").on("arrived",function() {
  $(this).addClass("coffee-graph1-arrived");
}); 

//---------------page fifteen----------------

$(".coffee-graph2").on("arrived",function() {
  $(this).addClass("coffee-graph2-arrived");
}); 

//---------------page sixteen-----------------


$(".pot").on("arriving",function() {
  $(this).addClass("pot-arriving");
}); 


$(".leaves").on("arrived",function() {
  $(this).addClass("leaves-arrived");
}); 
