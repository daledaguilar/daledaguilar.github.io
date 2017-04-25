$(document).ready(function() {

  $("#sidebar-button").click(function(){
    if ($(".sidebar-box").hasClass('sidebar-active')){
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-box').removeClass('sidebar-active');
      $('.page').removeClass('paper-active');
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
  });
