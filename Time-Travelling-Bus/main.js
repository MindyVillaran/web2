// (Move Bus, Activate Fire, Turn Clock, Change Background) - with Levers

// Forewards

$("#lever2").on("click",function(e) { 
  $("#bus-body").addClass("move");
  $("#bus-body").removeClass("reset");
  $(".fire").show();
  $("#hour").addClass("animatedF-hour-hand");
  $("#minute").addClass("animatedF-minute-hand");
  $("#hour").removeClass("animatedB-hour-hand");
  $("#minute").removeClass("animatedB-minute-hand");
  $(".cloud-holder").addClass("cloud-forward");
  $(".cloud-holder").removeClass("cloud-backward");
  $("body").addClass("night");
  $("body").removeClass("day");  
  $(".ground").addClass("nightg"); 
  $(".ground").removeClass("dayg"); 
  $(".whole-bus").addClass("whole-bus-move")
  $(".whole-bus").removeClass("whole-bus-moveB")
});


// Backwards

$("#lever1").on("click",function(e) { 
  $("#bus-body").removeClass("move");
  $("#bus-body").addClass("reset");
  $(".fire").hide();
  $("#hour").addClass("animatedB-hour-hand");
  $("#minute").addClass("animatedB-minute-hand");
  $("#hour").removeClass("animatedF-hour-hand");
  $("#minute").removeClass("animatedF-minute-hand");
  $(".cloud-holder").removeClass("cloud-forward");
  $(".cloud-holder").addClass("cloud-backward");
  $("body").removeClass("night");
  $("body").addClass("day"); 
  $(".ground").removeClass("nightg"); 
  $(".ground").addClass("dayg"); 
  $(".whole-bus").addClass("whole-bus-moveB")
  $(".whole-bus").removeClass("whole-bus-move")
  
});


// Activating Same Animations with the Lever Handle

// Forewards

 $(".handle").on("click",function(e) { 
  $("#bus-body").addClass("move");
  $("#bus-body").removeClass("reset");
  $(".fire").show();
  $("#hour").addClass("animatedF-hour-hand");
  $("#minute").addClass("animatedF-minute-hand");
  $("#hour").removeClass("animatedB-hour-hand");
  $("#minute").removeClass("animatedB-minute-hand");
  $(".cloud-holder").addClass("cloud-forward");
  $(".cloud-holder").removeClass("cloud-backward");
  $("body").addClass("night");
  $("body").removeClass("day");
  $(".ground").addClass("nightg"); 
  $(".ground").removeClass("dayg"); 
  $(".whole-bus").addClass("whole-bus-move")
  $(".whole-bus").removeClass("whole-bus-moveB")
});

// Backwards

 $(".handle").on("click",function(e) { 
  $("#bus-body").removeClass("move");
  $("#bus-body").addClass("reset");
  $(".fire").hide();
  $("#hour").addClass("animatedB-hour-hand");
  $("#minute").addClass("animatedB-minute-hand");
  $("#hour").removeClass("animatedF-hour-hand");
  $("#minute").removeClass("animatedF-minute-hand");
  $(".cloud-holder").removeClass("cloud-forward");
  $(".cloud-holder").addClass("cloud-backward");
  $("body").removeClass("night"); 
  $("body").addClass("day");    
  $(".ground").removeClass("nightg"); 
  $(".ground").addClass("dayg");
  $(".whole-bus").addClass("whole-bus-moveB")
  $(".whole-bus").removeClass("whole-bus-move")  
});


// Lights on

$("#blue-button").on("click",function(e) {
	$(".glow").toggle();
});

  
  


