$(document).ready(function() {



  $("#sidebar-button").click(function() {

    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active")
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
    $('body').addClass('no-scroll');
    }, 300);
    }
  })

  $(".page-wrapper").click(function(){

  })

  // QUESTION 7
$(".page-wrapper").click(function(){
   if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active")

  }

})


  $("#carousel-next").click(function() {
  var marginleft = parseInt($("#carousel").css("margin-left").replace("px", ""))
  if (marginleft == -3840) {
    return false;
  }
  else {
    $("#carousel").css("margin-left", marginleft - 960);
  }
});




    var marginleft = parseInt($("#carousel").css("margin-left").replace("px", ""))
        if (marginleft == 0) {
        return false;
    }
    else {
      $("#carousel").css("margin-left", marginleft + 960);
    }
  });
