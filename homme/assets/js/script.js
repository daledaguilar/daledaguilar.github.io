$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $("#sidebar-button").click(function() {
    // Your code here

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
  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  // QUESTION 8
  $("#carousel-next").click(function() {
  var marginleft = parseInt($("#carousel").css("margin-left").replace("px", ""))
  if (marginleft == -3840) {
    return false;
  }
  else {
    $("#carousel").css("margin-left", marginleft - 960);
  }
});



  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {
    var marginleft = parseInt($("#carousel").css("margin-left").replace("px", ""))
        if (marginleft == 0) {
        return false;
    }
    else {
      $("#carousel").css("margin-left", marginleft + 960);
    }
  });



  //THIS IS NOT A REQUIRED QUESTION
  // EXTRA FOR EXPERTS

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});
