$(".scroller").scrollFlight();

//----------------dropdown menu--------------------


$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

//----------------sidebar menu--------------------

$("#page1").on("arriving",function() {
  $(".intro").addClass("current"); 
});

$("#title").on("departed",function() {
	$("#back-to-top").fadeIn("slow");
});

$("#title").on("redeparted",function() {
	$("#back-to-top").fadeIn("slow");
});


$("#page1").on("rearriving",function() {
  $(".thelogo").removeClass("current");
  $(".intro").addClass("current");
});

$("#title").on("rearriving",function() {
  $(".intro").removeClass("current");
  $("#back-to-top").fadeOut("slow");
  
});

$("#title").on("rearrived",function() {
  $(".intro").removeClass("current");
});

$("#title").on("arrived",function() {
  $(".intro").removeClass("current");
});

$("#title").on("arriving",function() {
    $(".intro").removeClass("current");
});


$("#page3").on("arriving",function() {
  $(".intro").removeClass("current");
  $(".thelogo").addClass("current");
});


$("#page3").on("rearriving",function() {
  $(".system").removeClass("current");
  $(".thelogo").addClass("current");
});

$("#page5").on("arriving",function() {
  $(".thelogo").removeClass("current");
  $(".system").addClass("current");
});


$("#page5").on("rearriving",function() {
  $(".action").removeClass("current");
  $(".system").addClass("current");
});

$("#page9").on("arriving",function() {
  $(".system").removeClass("current");
  $(".action").addClass("current");
});


$("#page9").on("rearriving",function() {
  $(".action").addClass("current");
});




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
  $(this).addClass("img1-arrived");
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
 
//---------------page eleven----------------

$(".bubbles-container").on("arrived",function() {
  $(this).addClass("bubbles-container-arrived");
}); 

$(".bubblePage").on("arrived",function() {
  $(this).addClass("bubblePage-arrived");
}); 

$("#shirt-bubble").hover(function(e){ 
	console.log("hover")
  $("#shirtCircleText").text("400 gallons of water to grow the cotton needed for one shirt");
},function(e){ 
  $("#shirtCircleText").empty();
})

$("#tire-bubble").hover(function(e){ 
	console.log("hover")
  $("#tireCircleText").text("2000+ gallons of water for 1 tire");
},function(e){ 
  $("#tireCircleText").empty();
})

$("#paint-bubble").hover(function(e){ 
	console.log("hover")
  $("#paintCircleText").text("13 gallons of water for 1 gallon of paint");
},function(e){ 
  $("#paintCircleText").empty();
})

$("#paper-bubble").hover(function(e){ 
	console.log("hover")
  $("#paperCircleText").text("1,321 gallons for 500 sheets of paper");
},function(e){ 
  $("#paperCircleText").empty();
})


//---------------smooth scroll-----------------



$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});

