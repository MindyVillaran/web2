// (Move Bus, Activate Fire, Turn Clock, Change Background) - with Levers

$("#lever2").on("click",function(e) { 
  $("#bus-body").addClass("move");
  $("#bus-body").removeClass("reset");
  $(".fire").show();
  $("#hour").addClass("animatedF-hour-hand");
  $("#minute").addClass("animatedF-minute-hand");
  $("#hour").removeClass("animatedB-hour-hand");
  $("#minute").removeClass("animatedB-minute-hand");
  $(".cloud").addClass("cloud-forward");
  $(".cloud").removeClass("cloud-backward");
  $("body").addClass("night");
  $("body").removeClass("day");  
  $(".ground").addClass("nightg"); 
  $(".ground").removeClass("dayg"); 
});

$("#lever1").on("click",function(e) { 
  $("#bus-body").removeClass("move");
  $("#bus-body").addClass("reset");
  $(".fire").hide();
  $("#hour").addClass("animatedB-hour-hand");
  $("#minute").addClass("animatedB-minute-hand");
  $("#hour").removeClass("animatedF-hour-hand");
  $("#minute").removeClass("animatedF-minute-hand");
  $(".cloud").removeClass("cloud-forward");
  $(".cloud").addClass("cloud-backward");
  $("body").removeClass("night");
  $("body").addClass("day"); 
  $(".ground").removeClass("nightg"); 
  $(".ground").addClass("dayg"); 
});


// Activating Same Animations with the Lever Handle

  $(".handle").on("click",function(e) { 
  $("#bus-body").addClass("move");
  $("#bus-body").removeClass("reset");
  $(".fire").show();
  $("#hour").addClass("animatedF-hour-hand");
  $("#minute").addClass("animatedF-minute-hand");
  $("#hour").removeClass("animatedB-hour-hand");
  $("#minute").removeClass("animatedB-minute-hand");
  $(".cloud").addClass("cloud-forward");
  $(".cloud").removeClass("cloud-backward");
  $("body").addClass("night");
  $("body").removeClass("day");
  $(".ground").addClass("nightg"); 
  $(".ground").removeClass("dayg"); 
});

  $(".handle").on("click",function(e) { 
  $("#bus-body").removeClass("move");
  $("#bus-body").addClass("reset");
  $(".fire").hide();
  $("#hour").addClass("animatedB-hour-hand");
  $("#minute").addClass("animatedB-minute-hand");
  $("#hour").removeClass("animatedF-hour-hand");
  $("#minute").removeClass("animatedF-minute-hand");
  $(".cloud").removeClass("cloud-forward");
  $(".cloud").addClass("cloud-backward");
  $("body").removeClass("night"); 
  $("body").addClass("day");    
  $(".ground").removeClass("nightg"); 
  $(".ground").addClass("dayg");
});


// Lights on

$("#blue-button").on("click",function(e) {
	$(".glow").toggle();
});

  
  


