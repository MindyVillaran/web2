// Move Bus, Activate Fire, and Turn Clock with Levers

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
  $("body").removeClass("day")
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
  $("body").addClass("day")  
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
  $(".cloud").addClass("cloud-forward");
  $(".cloud").removeClass("cloud-backward");
  $("body").addClass("night");
  $("body").removeClass("day")
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
  $("body").addClass("day")    
});


// Lights on

var LightsOn = false

$("#blue-button").on("click",function(e) {
    if(LightsOn) {
        LightsOn =true;
        $(".light").removeClass("light-on");
    } else {
   	  LightsOn =false;
      $(".light").addClass("light-on");}
		
	$(".glow").toggle();
});

  
  


