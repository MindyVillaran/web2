$(".scroller").scrollFlight();

$(".title").on("arrived",function() {
  $(".title").addClass("title-arrived");
});

$(".text-block").on("arrived",function() {
  $(this).addClass("text-block-arrived");
}); 
  
$(".text-block2").on("arrived",function() {
  $(this).addClass("quote-arrived");
}); 



