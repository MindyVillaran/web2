// Move Bus, Activate Fire, and Turn Clock with Levers

$("#lever2").on("click",function(e) { 
  $("#bus-body").addClass("move");
  $("#bus-body").removeClass("reset");
  $(".fire").show();
  
  $("#hour").addClass("animatedF-hour-hand");
  $("#minute").addClass("animatedF-minute-hand");
  $("#hour").removeClass("animatedB-hour-hand");
  $("#minute").removeClass("animatedB-minute-hand");
});

$("#lever1").on("click",function(e) { 
  $("#bus-body").removeClass("move");
  $("#bus-body").addClass("reset");
  $(".fire").hide();
  
  $("#hour").addClass("animatedB-hour-hand");
  $("#minute").addClass("animatedB-minute-hand");
  $("#hour").removeClass("animatedF-hour-hand");
  $("#minute").removeClass("animatedF-minute-hand");
});


// Extending Animations to the Handle

$(".handle").on("click",function(e) { 
  $("#bus-body").addClass("move");
  $("#bus-body").removeClass("reset");
  $(".fire").show();
  
  $("#hour").addClass("animatedF-hour-hand");
  $("#minute").addClass("animatedF-minute-hand");
  $("#hour").removeClass("animatedB-hour-hand");
  $("#minute").removeClass("animatedB-minute-hand");
});

$(".handle").on("click",function(e) { 
  $("#bus-body").removeClass("move");
  $("#bus-body").addClass("reset");
  $(".fire").hide();
  
  $("#hour").addClass("animatedB-hour-hand");
  $("#minute").addClass("animatedB-minute-hand");
  $("#hour").removeClass("animatedF-hour-hand");
  $("#minute").removeClass("animatedF-minute-hand");
});

