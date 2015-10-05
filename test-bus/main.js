$("#handle1").on("click",function(e) { 
  $(".bus").removeClass("move");
  $(".bus").addClass("reset");
});

$("#handle2").on("click",function(e) { 
  $(".bus").addClass("move");
  $(".bus").removeClass("reset");
});

$("#handle2").on("click",function(e) { 
  $(".fire").addClass("appear");
});

$("#handle1").on("click",function(e) { 
  $(".fire").removeClass("appear");
});
