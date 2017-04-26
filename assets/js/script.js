$(document).ready(function() {

  $("#sidebar-button").click(function(){
    if ($(".sidebar-box").hasClass('sidebar-active')){
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-box').removeClass('sidebar-active');
      $('.page').removeClass('page-active');
    } else {
        $('#sidebar-button').addClass('button-active');
        $('.sidebar-box').addClass('sidebar-active');
        $('.page').addClass('page-active');
        setTimeout(function(){
          $('body').addClass('no-scroll');
        }, 300);
    }
  });

  $(".page").click(function(){
    if ($(".sidebar-box").hasClass('sidebar-active')){
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-box').removeClass('sidebar-active');
      $('.page').removeClass('page-active');
    }
  });


  $("#gallery-next").click(function(){
    var x = parseInt($('#gallery').css('margin-left').replace("px",""));
    if (x == -3840){
      return false;
    } else {
      $("#gallery").css('margin-left', x-960).replace(x-960);
    }
  });

  $("#gallery-prev").click(function(){
    var y = parseInt($('#gallery').css('margin-left').replace("px",""));
    if (y == 0){
      return false;
    } else {
      $("#gallery").css('margin-left', y+960).replace(y+960);
    }
  });
$("#hello").click(function(){
  window.location.href = 'https://www.linkedin.com/in/ddaguilar/';
})
$("#facts").click(function(){
  window.location.href = 'http://artedeaguilar.tumblr.com/';
})
$("#art").click(function(){
  window.location.href = 'http://www.reno.gov/about-reno';
})
$("major-text").click(function(){
  $("#snake").show();
})
$("#info-section").click(function(){
  $("#snake").hide();
})
$("home-text").click(function(){
  $("#reno").show();
})
$("#info-section").click(function(){
  $("#snake").hide();
})
$("color-text").click(function(){
  $("#stitch").show();
})
$("#info-section").click(function(){
  $("#snake").hide();
})
  });
