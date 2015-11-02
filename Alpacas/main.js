$(".scroller").scrollFlight();

$(".title").on("arrived",function() {
  $(".title").addClass("title-arrived");
});

$(".text-block").on("arrived",function() {
  $(this).addClass("text-block-arrived");
}); 
  
$(".text-block2").on("arrived",function() {
  $(this).addClass("text-block2-arrived");
}); 

$(".img1").on("arrived",function() {
  $(this).addClass("img1-arrived");
}); 

$(".img2").on("arrived",function() {
  $(this).addClass("img2-arrived");
});

$(".img3").on("arrived",function() {
  $(this).addClass("img3-arrived");
});
