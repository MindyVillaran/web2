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

$("#page3").on("arriving",function(e) {
    $(".img1").release();
	$(".showerWater").release();
	$(".steam").release();
});

$("#page2b").on("departed",function(e) {
    $(".img1").unaffix();
	$(".showerWater").unaffix();
	$(".steam").unaffix();
});

//---------------page four-----------------

$(".watering-can").on("arrived",function() {
  $(this).addClass("watering-can-arriving");
  $(".water-drop1").addClass("water-drop1-arrived");
}); 

//---------------page nine-----------------

$(".droplets").on("arrived",function() {
  $(this).addClass("droplets-arrived");
}); 

//---------------page ten-----------------


$("#page5").on("departed",function(e) {
    $(".water-drop2").affix();
});

$("#page5").on("rearriving",function(e) {
    $(".water-drop2").unaffix();
});

$("#page9").on("departed",function(e) {
    $(".factory").affix();
	$(".smoke").affix().addClass(".smoke-arrived");
});

$("#page9").on("rearriving",function(e) {
    $(".factory").unaffix();
	$(".smoke").unaffix();
});

$("#page10").on("departing",function(e) {
    $(".shirt").addClass("shirt-arriving");
	$(".shirt").affix();
});

$("#page10").on("rearriving",function(e) {
	$(".shirt").unaffix();
    $(".shirt").removeClass("shirt-arriving");
});

$("#page11").on("arriving",function(e) {
    $(".factory").release();
	$(".smoke").release();
	$(".water-drop2").release();
	$(".shirt").release();
});

$("#page10c").on("departed",function(e) {
    $(".factory").unaffix();
	$(".smoke").unaffix();
	$(".water-drop2").unaffix();
	$(".shirt").unaffix();
});

$("#page3").on("arriving",function(e) {
    $(".img1").release();
	$(".showerWater").release();
	$(".steam").release();
});

$("#page2b").on("departed",function(e) {
    $(".img1").unaffix();
	$(".showerWater").unaffix();
	$(".steam").unaffix();
});

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
