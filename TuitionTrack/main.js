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

//----------------sidebar menu-----------------------



$("#title").on("departed",function() {
	$("#back-to-top").fadeIn("slow");
});

$("#title").on("redeparted",function() {
	$("#back-to-top").fadeIn("slow");
});

$("#title").on("rearriving",function() {
  $(".intro").removeClass("current");
  $("#back-to-top").fadeOut("slow");
});

$("#title").on("rearrived",function() {
  $(".intro").removeClass("current");
  $(".thelogo").removeClass("current");
  $(".system").removeClass("current");
  $(".action").removeClass("current");
});

$("#title").on("arrived",function() {
  $(".intro").removeClass("current");
});

$("#title").on("arriving",function() {
    $(".intro").removeClass("current");
});





$("#page1").on("arriving",function() {
  $(".intro").addClass("current"); 
});

$("#page1").on("rearriving",function() {
  $(".thelogo").removeClass("current");
  $(".intro").addClass("current");
});


$("#pageBrand").on("rearrived",function() {
  $(".thelogo").removeClass("current");
  $(".intro").addClass("current");
});






$("#pageLogo").on("arriving",function() {
  $(".intro").removeClass("current");
  $(".thelogo").addClass("current");
});


$("#spaceabove").on("rearrived",function() {
  $(".system").removeClass("current");
  $(".thelogo").addClass("current");
});

$("#spaceabove").on("rearriving",function() {
  $(".system").removeClass("current");
  $(".thelogo").addClass("current");
});





$("#pageType").on("arriving",function() {
  $(".thelogo").removeClass("current");
  $(".system").addClass("current");
});


$("#quote2").on("rearriving",function() {
  $(".action").removeClass("current");
  $(".system").addClass("current");
});

$("#quote2").on("rearrived",function() {
  $(".action").removeClass("current");
  $(".system").addClass("current");
});

$("#applications").on("arriving",function() {
  $(".system").removeClass("current");
  $(".action").addClass("current");
});


$("#applications").on("rearriving",function() {
  $(".action").addClass("current");
  $(".system").removeClass("current");
});

$("#applications").on("rearrived",function() {
  $(".action").addClass("current");
  $(".system").removeClass("current");
});


//----------------type-styles--------------------

$(".title").on("arrived",function() {
  $(".title").addClass("title-arrived");
});

$(".title").on("arrived",function() {
  $(".title-top").addClass("title-arrived");
});

$(".center-title").on("arriving",function() {
  $(this).addClass("pull-quote1-arrived");
}); 

$(".left-text").on("arriving",function() {
  $(this).addClass("left-text-arrived");
}); 

$(".Left-title-text").on("arriving",function() {
  $(this).addClass("left-text-arrived");
}); 


$(".left-image").on("arriving",function() {
  $(this).addClass("left-image-arrived");
}); 


$(".left-transition").on("arriving",function() {
  $(this).addClass("left-image-arrived");
}); 

	 
$(".right-text").on("arriving",function() {
  $(this).addClass("right-text-arrived");
}); 

$(".FLOATright-text").on("arriving",function() {
  $(this).addClass("right-text-arrived");
}); 


$(".right-transition").on("arriving",function() {
  $(this).addClass("right-image-arrived");
}); 
   
   
$(".right-image").on("arriving",function() {
  $(this).addClass("right-image-arrived");
}); 

$(".application").on("arriving",function() {
  $(this).addClass("right-image-arrived");
}); 

$(".applicationL").on("arriving",function() {
  $(this).addClass("left-image-arrived");
}); 

$(".center").on("arrived",function() {
  $(this).addClass("center-arrived");
}); 

//---------------page eleven----------------

$(".bubbles-container").on("arrived",function() {
  $(this).addClass("bubbles-container-arrived");
}); 

$("#calendar").hover(function(e){ 
	console.log("hover")
  $("#shirtCircleText").text("Staying current on payments is crucial to avoid deliquency and default");
},function(e){ 
  $("#shirtCircleText").empty();
})

$("#coins").hover(function(e){ 
	console.log("hover")
  $("#paintCircleText").text("Student debt is a constantly growing issue with increasing severity");
},function(e){ 
  $("#paintCircleText").empty();
})

$("#bank").hover(function(e){ 
	console.log("hover")
  $("#paperCircleText").text("Financial problems often occur because of poor loan choices");
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

