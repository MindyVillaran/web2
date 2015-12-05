function displayModal(items) {
    var name = items.snippet.title;
    var videoId = items.id.videoId;
    var caption = items.snippet.description;
  
  $(".modal").empty();
   
  var $h2 = $("<h2>").text(name);
  var $iframe = $("<iframe>").attr("src","https://www.youtube.com/embed/" + videoId);
  var $p = $("<p>").text(caption);

   $(".modal").append($h2,$iframe,$p);
   
   
   $(".overlay").show();
   $(".overlay").on("click",function(e) {
     hideModal();
   });
   $(".modal").show();
}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}  //creating and programming the modal 


function addAll(data) { 
		for(var i = 0; i < data.items.length; i++) {	
		addThumbnail(data.items[i]); 	
	}}
	

function addThumbnail(items) {
    var name = items.snippet.title;
    var thumbUrl = items.snippet.thumbnails.medium.url;

	var $page = $(".page");

	var $container = $("<div class='container'>");

	var $name = $("<h2>").text(name);
	var $img = $("<img>").attr("src",thumbUrl);

	$container.append($name).append($img);

	$page.append($container);
	
	$img.on("click",function(e) { 
		$(".overlay").show();
		displayModal(items);
		});	
	
	$(".overlay").on("click",function(e) { 
	 $(this).hide()
		});
}







	


	
	