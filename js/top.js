//TOPページ　fixする位置にきたらクラス付与
$(function() {

  var $win = $(window);
  var $header = $(".cmn_header");
  var targetPos;
  var targetHeight;

  var addClass = "fixed";

  $(window).on('load resize', function(){
    targetHeight = $('.top_fv').outerHeight();
    targetPos = targetHeight - $('.top_cot').height();
  });

  $win.on('scroll', function () {
    $('.test02').text($(this).scrollTop())
    if ($(this).scrollTop() > targetPos) {
      $header.addClass(addClass);
    } else {
      $header.removeClass(addClass);
    }
  });
});


//レスポンシブ画像切り替え
$(function(){
  var $setElem = $('.img_switch'),
  pcName = '_pc.',
  spName = '_sp.',
  replaceWidth = 768;

  $setElem.each(function(){
  var $this = $(this);
  function imgSize(){
    if(window.innerWidth > replaceWidth) {
      $this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
    } else {
      $this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
    }
  }
  $(window).resize(function(){imgSize();});
    imgSize();
  });
});



$(function(){
  $('.footer_after').hide();
    $(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
      $('.footer_after').fadeIn();

    } else {
      $('.footer_after').fadeOut();
    }
  });
});



//電話番号リンク
$(function() {
  var agent = navigator.userAgent;
    if(agent.search(/Phone/) != -1 || agent.search(/Mobile/) != -1 || agent.search(/iPad/) != -1 || agent.search(/Android/) != -1){
    $('[data-tel]').each(function() {
      var $ele = $(this);
      $ele.wrapInner('<a href="tel:' + $ele.data('tel') + '"></a>');
    });
  }
});


//slick_slider
$(function(){
  $('.mv_after_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    dots: false,
    arrows: false,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    responsive: [
      {
      breakpoint: 769,
        settings: {
          slidesToShow: 3
          }
      }
    ]
  });
  $(".slider").each(function() {
    $(this).slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: '22%',
      centerMode: true,
      responsive: [
        {
        breakpoint: 769,
          settings: {
            slidesToShow: 1,
            centerPadding: '14%',
            arrows: true,
            prevArrow:'<div class="prev"></div>',
            nextArrow:'<div class="next"></div>'
          }
        }
      ]
    });
  });
});


//slick_slider
$(function(){
  $('.mv_slider')
  .on("init", function (event, slick) {
    $(this).parent().append(
      '<div class="slick-counter"><span class="count-current"></span><span class="count-total"></span></div>'
    );
    $(".count-current").text(slick.currentSlide + 1);
    $(".count-total").text(slick.slideCount);
  })
  .slick({
    speed: 2000,
    fade: true,
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".count-current").text(nextSlide + 1);
  });
  $(".counseling_slide").each(function() {
    $(this).slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      prevArrow:'<div class="prev"></div>',
      nextArrow:'<div class="next"></div>',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '31%',
      centerMode: true,
      responsive: [
        {
        breakpoint: 769,
          settings: {
            slidesToShow: 1,
            centerPadding: '12.5%'
          }
        }
      ]
    });
  });
  $(".dress_slide_sp").each(function() {
    $(this).slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 9000,
      dots: false,
      arrows: false,
      cssEase: 'linear',
      pauseOnFocus: false,
      pauseOnHover: false,
      centerPadding: '14%',
      centerMode: true,
      infinite: true
    });
  });
});



//PC用
$(function(){
  $('.thumbnails img').on('click',function(){
    //mainに切り替えるimgのsrc取得
    img = $(this).attr('src');
    //currentクラス付け替え
    $('.thumbnails li').removeClass('current');
    $(this).parent().addClass('current');
    //fadeOutできたらsrc変更してfadeIn
    $('.main_image img').fadeOut(50, function() {
      $('.main_image img').attr('src', img).on('load', function() {
        $(this).fadeIn();
      })
    })
  });
});
