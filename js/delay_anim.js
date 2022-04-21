$(function(){

  //init
  var breakPoint = 768;

  //set group delay time
  $(window).on('load resize', function(){
    var windowWidth = $(window).width();
    $('.set_delay_time_group').each(function(){
      if($(this).is('[data-column-pc]')) {
        var columnPC = $(this).attr('data-column-pc');
      }
      if($(this).is('[data-column-sp]')) {
        var columnSP = $(this).attr('data-column-sp');
      }
      if($(this).is('[data-steptime]')) {
        var delayTimeStep = $(this).attr('data-steptime');
      } else {
        var delayTimeStep = 0.1;
      }
      var setColumn = null;
      if(columnPC || columnSP) {
        if(columnPC && windowWidth >= breakPoint) {
          setColumn = columnPC - 1;
        } else if(columnSP && windowWidth < breakPoint) {
          setColumn = columnSP - 1;
        }
      }
      var i = 0;
      $('.set_delay_anim', this).each(function(){
        $(this).removeAttr('style');
        if(setColumn) {
          var delayTime = i * delayTimeStep;
          if(i != 0) {
            $(this).css('transition-delay', delayTime + 's');
          }
          if(i >= setColumn) {
            i = 0;
          } else {
            i++;
          }
        }
      });
    });
  });

  //show load + set individual delay time
  $(window).load(function(){
    var i = 0;
    $('.set_delay_anim').each(function(){
      var targetPos = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      var showArea = scrollPos + windowHeight;
      //set individual delay time
      if($(this).is('[data-delaytime]')) {
        $(this).css('transition-delay', $(this).attr('data-delaytime') + 's');
      }
      //show load
      if(targetPos <= showArea) {
        var parent = $(this).parent();
        if(parent.hasClass('set_delay_time_group')) {
          if(parent.is('[data-steptime]')) {
            var delayTimeStep = parent.attr('data-steptime');
          } else {
            var delayTimeStep = 0.1;
          }
          var delayTime = i * delayTimeStep;
          if(i != 0) {
            $(this).css('transition-delay', delayTime + 's');
          }
          i++;
        }
        $(this).delay(150).addClass('show');
      }
    });
  });

  //show scroll
  $(window).scroll(function (){
    $('.set_delay_anim').each(function(){
      var targetPos = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      var showArea = targetPos - windowHeight + (windowHeight / 4);
      if (scrollPos > showArea){
        $(this).delay(150).addClass('show');
      }
    });
  });
});

// $(.testlist).text("bbb");
