//viewport切り替え
$(function(){
  var ua = navigator.userAgent;
  var winWidth;
  if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
    $('#viewport').attr('content','width=device-width');
    winWidth = window.innerWidth;
    if(winWidth <= 767) {
      $('#viewport').attr('content','width=device-width');
    } else {
      $('#viewport').attr('content','width=1000');
    }
  } else {
    $('#viewport').attr('content','width=1000');
  }
  $(window).resize(function(){
    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
      $('#viewport').attr('content','width=device-width');
      winWidth = window.innerWidth;
      if(winWidth <= 767) {
        $('#viewport').attr('content','width=device-width');
      } else {
        $('#viewport').attr('content','width=1000');
      }
    }
  });
});


// $(function(){
//   var ua = navigator.userAgent;
//   var winWidth;
//   if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
//       $('#viewport').attr('content','width=device-width');
//       winWidth = window.innerWidth;
//       if(winWidth <= 640) {
//         $('#viewport').attr('content','width=640');
//       } else {
//         $('#viewport').attr('content','width=1000');
//       }
//   } else {
//     $('#viewport').attr('content','width=1000');
//   }
//   $(window).resize(function(){
//     if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
//       $('#viewport').attr('content','width=640');
//       winWidth = window.innerWidth;
//       if(winWidth <= 640) {
//         $('#viewport').attr('content','width=640');
//       } else {
//         $('#viewport').attr('content','width=1000');
//       }
//     }
//   });
// });



//loading
$(function(){
  var setValue = 0;
  $('#loader p span').each(function(){
    setValue = setValue + 5;
    calcValue = setValue / 100;
    $(this).css('transition-delay',calcValue + 's');
  });
  $(document).ready(function() {
    $('#loader p span').addClass('load01');
  });
  $(window).load(function() {
    $('#loader p').delay(2000).fadeOut('slow');
    $('#loader').delay(2400).fadeOut('slow');
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


//matchHeight
$(function(){
  $(window).on('load resize', function() {
    if($('.matchHeight').length) {
      $('.matchHeight a').matchHeight();
      $('.matchHeight td').matchHeight();
    }
  });
});



//pagetop 基本
$(function(){
  $('.pagetop').click(function(){
    $('body, html').animate({ scrollTop: 0 }, 500);
  });
});



//pagetop 応用
$(function() {
  var topBtn = $('.pagetop');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    //ボタンの表示方法
      topBtn.fadeIn();
    } else {
    //ボタンの非表示方法
      topBtn.fadeOut();
    }
  });
   //スクロールしてトップ
  topBtn.click(function () {
    $('body,  html').animate({
      scrollTop: 0
    }, 600, 'swing');
      return false;
  });
});



//pagetop 応用
$(function() {
  var topBtn = $('.pagetop');
  topBtn.hide();
  var offsetTop = $('#view').offset().top + 200 + $('#view').innerHeight();
  $(window).scroll(function () {
    if ($(this).scrollTop() + $(window).height() > offsetTop) {
    //ボタンの表示方法
      topBtn.fadeIn();
      topBtn.addClass('show');
    } else {
    //ボタンの非表示方法
      topBtn.fadeOut();
      topBtn.removeClass('show');
    }
  });
   //スクロールしてトップ
  topBtn.click(function () {
    $('body,  html').animate({
      scrollTop: 0
    }, 600, 'swing');
      return false;
  });
});



//pagetop
$(function() {
  $('.pagetop').hide();
   // ↑ページトップボタンを非表示にする
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
      $('.pagetop').slideDown('fast');
      // ↑ (100より小さい時は)ページトップボタンをスライドダウン
    } else {
      $('.pagetop').slideUp('fast');
      // ↑ それ以外の場合の場合はスライドアップする。
    }
    // フッター固定する
    scrollHeight = $(document).height();
    // ドキュメントの高さ
    scrollPosition = $(window).height() + $(window).scrollTop();
    //　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
    footHeight = $('.copyright').innerHeight();
    // コピーライトの高さ

    if ( scrollHeight - scrollPosition  <= footHeight ) {
    // 現在の下から位置が、コピーライトの高さの位置にはいったら
    //  '.pagetop'のpositionをabsoluteに変更し、フッターの高さの位置にする
      $('.pagetop').css({
        'position':'fixed',
        'bottom': footHeight
      });
    } else {
    // それ以外の場合は元のcssスタイルを指定
      $('.pagetop').css({
        'position':'fixed',
        'bottom': '30px'
      });
    }
  });
  // トップへスムーススクロール
  $('.pagetop').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 600);
    // ページのトップへ 500 のスピードでスクロールする
    return false;
  });
});


//pagetop(ホバー処理がある場合)
$(function() {
  var $topBtn = $('.pagetop');
  //ウィンドウサイズ、フッターサイズをセット
  var winWidth;
  var winHeight;
  var scrollHeight;
  var footerHeight;
  var stopPos;
  $(window).on('load resize', function() {
    winWidth = $(window).innerWidth();
    winHeight = $(window).height();
    scrollHeight = $(document).height();
    footerHeight = $('.cmn_footer').innerHeight();
    stopPos = footerHeight + 10;
  });
  //スクロール時の処理
  $(window).on('scroll', function() {
    //表示・非表示
    if($(this).scrollTop() > 100) {
      $topBtn.addClass('show');
    } else {
      $topBtn.removeClass('show');
    }
    //ボタン位置をフッター上で固定（SP用）
    if(winWidth < 768) {
      var scrollPos = winHeight + $(window).scrollTop();
      if(scrollHeight - scrollPos <= stopPos) {
        $topBtn.css({
          'position' : 'absolute',
          'bottom' : stopPos,
        });
      } else {
        $topBtn.removeAttr('style');
      }
    }
  });
  //クリック時の処理
  $topBtn.click(function () {
    $('body,  html').animate({
      scrollTop: 0
    }, 600, 'swing');
      return false;
  });
});



//TOPページ　fixする位置にきたらクラス付与
$(function() {

  var $win = $(window);
  var $header = $('.cmn_header');
  var targetPos;
  var targetHeight;

  var addClass = 'fixed';

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


//ボタン（fixed　→　footerエリアにきたら非表示）
$(function() {
  var infoBtn = $('.last-info-btn');
  $(window).on("scroll", function() {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height();
    var check = window.pageYOffset;
    if (check >  scrollHeight - scrollPosition - 500 ) {
      infoBtn.fadeOut();
    } else {
      infoBtn.fadeIn();
    }
  });
});


//fixed　→　もとの位置にきたら固定
$(function() {
  var searchBtn = $('.search-search .btn');
  $(window).on('scroll', function() {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $('.footer-pos').innerHeight();
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      searchBtn.css({
        'position':'static',
        'bottom': footHeight
      });
      $('.footer-pos').removeClass('active');
    } else {
      searchBtn.css({
        'position':'fixed',
        'bottom': '0'
      });
      $('.footer-pos').addClass('active');
    }
  });
});


//MV要素が終わったら表示
$(function() {

  var winWidth;

  var $header = $('.cmn_header');
  var mH = $('.mv').innerHeight();
  var addClass = 'fixed';

  $(window).on('load resize', function() {
    winWidth = $(window).width();
    if(winWidth > 767) {
      $header.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > mH) {
        //ボタンの表示方法
          $header.fadeIn();
          $header.addClass(addClass);
        } else {
        //ボタンの非表示方法
          $header.fadeOut();
        }
      });
    } else {
      $(window).scroll(function () {
        if ($(this).scrollTop() > mH) {
          $('.menu-trigger').addClass('active');
        } else {
          $('.menu-trigger').removeClass('active');
        }
      });
    }
  });
});



//メニューバートリガー
$(function() {
  var state = false;
  var scrollpos;
  $('.menu-trigger').on('click', function(){
    $('.header').stop().toggleClass('open');
    if(state == false && ($('.header').hasClass('open'))) {
      $('.menu-trigger p').stop().text('CLOSE');
      $('.global').stop().fadeIn();
      scrollpos = $(window).scrollTop();
      $('body').stop().addClass('fixed').css({'top': -scrollpos});
      state = true;
    } else {
      $('.menu-trigger p').stop().text('MENU');
      $('.global').stop().fadeOut();
      $('body').stop().removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      state = false;
    }
  });
});



//drawer 基本 slideToggleの場合
$(function(){
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('#global').slideToggle();
    var img = $('.hamburger img');
    if($('.hamburger').hasClass('active')) {
      img.attr('src',img.attr('src').replace('hamburger','close'));
    } else {
      img.attr('src',img.attr('src').replace('close','hamburger'));
    }
  });
});



//SP時　メニューバー
$(function(){
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.global').slideToggle();
    if($('.hamburger').hasClass('active')) {
      $(this).html('<i class="fas fa-times ico"></i>');
    } else {
      $(this).html('<i class="fas fa-bars ico"></i>');
    }
  });
});




//drawer 基本 fadeToggleの場合
$(function(){
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.global').fadeToggle();
    var img = $('.hamburger img');
    if($('.hamburger').hasClass('active')) {
      img.attr('src',img.attr('src').replace('hamburger','close'));
    } else {
      img.attr('src',img.attr('src').replace('close','hamburger'));
    };
    $('.logo').toggleClass('active');
  });
});



//drawer 応用
$(function(){
  var state = false;
  var scrollpos;
  var img = $('.hamburger img');
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.global').slideToggle(); //fadeToggleでもよい
    if(state == false && ($('.hamburger').hasClass('active'))) {
      img.attr('src',img.attr('src').replace('hamburger','close'));
      scrollpos = $(window).scrollTop();
      $('body').stop().addClass('fixed').css({'top': -scrollpos});
      state = true;
    } else {
      img.attr('src',img.attr('src').replace('close','hamburger'));
      window.scrollTo( 0 , scrollpos );
      state = false;
    }
    $('.cmn_header').toggleClass('active');
  });
  $('.global a').on('click',function() {
    $('.global').stop().slideUp(); //fadeOutでもよい
    img.attr('src',img.attr('src').replace('close','hamburger'));
    $('.hamburger').removeClass('active');
    $('.cmn_header').removeClass('active');
  });
});


//drawer｛特別なときに使用、基本使わない｝
$(function(){
  $('.hamburger').on('click', function() {
    $('.global').fadeIn();
  });
  $('.hamburger_close').on('click', function() {
    $('.global').fadeOut();
  });
  $('.global a').on('click',function() {
    $('.global').fadeOut();
  });
});

//メニューバーのクリック実装
$(function(){
  var contents = $('.ddmenu ul');
  $('.ddmenu > li').click(function(){
    $(contents).slideToggle();
  });
});



//アコーディオン
$(function(){
  var winWidth;
  $(window).on('load resize', function() {
    winWidth = window.innerWidth;
    if(winWidth > 767) {
      $('.navi .child').css('display' , '')
    }
  });
  $('.acc_tgl').on('click', function(){
    if(winWidth <= 767){
      $(this).toggleClass('active');
      $(this).next('.child').slideToggle();
       // メニューをクリックしたら他のサブメニューを閉じる
      $('.acc_tgl').not($(this)).next().slideUp();
      $('.acc_tgl').not($(this)).removeClass('active');
    }
  });
});


//通常アコーディオン
$(function(){
  $('.mod_acc dt').on('click', function(){
      $(this).next('.mod_acc dd').slideToggle();
      $(this).toggleClass('active');
      $(this).parent().toggleClass('open'); //必要な場合のみ
       // メニューをクリックしたら他のサブメニューを閉じる
      $('.mod_acc dt').not($(this).offset().top()).next().slideUp();
      $('.mod_acc dt').not($(this)).removeClass('active');
      $('.mod_acc').not($(this).parent()).removeClass('open'); //必要な場合のみ
  });
});



//固定ヘッダー横スクロール
$(function(){
  $(window).on('scroll', function(){
    $('.cmn_header').css('left', -$(window).scrollLeft());
  });
});



//固定ヘッダー　スクロール時一部消す処理
$(function (){
    var $win = $(window);
    var $header = $('.top_logo');
    var offsetTop = 0;

    var addClass = 'scrolled';

    $win.on('load scroll', function () {
        if($win.scrollTop() > offsetTop) {
            $header.addClass(addClass);
        } else {
            $header.removeClass(addClass);
        }
    });
});



//MV要素が終わったらフォローするボタンを表示
$(function() {
  var follow = $('#follow');
  var mH = $('.mv').innerHeight();
  follow.hide();
  //mv要素が終わったらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > mH) {
    //ボタンの表示方法
      follow.fadeIn();
    } else {
    //ボタンの非表示方法
      follow.fadeOut();
    }
  });
});



//フローティング　bnr
$(function() {
  $('.bnr_fade_sp').hide();
  $(window).on('scroll', function() {
    winWidth = window.innerWidth;
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $('.cmn_footer').innerHeight();
    if ($(this).scrollTop() <= 100) {
      $('.bnr_fade_sp').fadeOut('fast');
    } else if ( scrollHeight - scrollPosition  <= footHeight && winWidth <= 767) {
      $('.bnr_fade_sp').fadeOut();
    } else {
      $('.bnr_fade_sp').fadeIn();
    }
  });
});



//ナビ追従 ページリンクの際の高さ調整
$(window).on('load', function() {
  var url = $(location).attr('href');
  if(url.indexOf('#') != -1){
    var anchor = url.split('#');
    var target = $('#' + anchor[anchor.length - 1]);
    if(target.length){
      var pos = Math.floor(target.offset().top) - 77;
      $('html, body').animate({scrollTop:pos}, 0);
    }
  }
});



//　通常　ページ内リンク スムーススクロール
$(function(){
  $('a[href^=#].scroll').click(function() {
    var speed = 600;
    var href= $(this).attr('href');
    var target = $(href == '#' || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});



//　応用　ページ内リンク スムーススクロール
$(function(){
  var headerHight;
  var winWidth;
  $(window).on('load resize', function() {
    winWidth = window.innerWidth;
    if(winWidth > 767) {
      headerHight = 130;
    } else {
      headerHight = 80;
    }
  });
  $('a[href^=#].scroll').click(function() {
    var speed = 600;
    var href= $(this).attr('href');
    var target = $(href == '#' || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});



//アンカーリンク　他ページから遷移時
$(window).on('load', function() {
  var url = $(location).attr('href');
  if(url.indexOf('#') != -1){
    var anchor = url.split('#');
    var target = $('#' + anchor[anchor.length - 1]);
    if(target.length){
      var pos = Math.floor(target.offset().top) - 80; //固定ヘッダー高さ+アニメーション用ずれ
      $('html, body').animate({scrollTop:pos}, 1);
    }
  }
});



//modal
$(function(){
  $('.modal_open').click(function(){
    var modal = $(this).attr('href');
    $(modal).fadeIn('slow');
    $('.modal-close').off().click(function(){
      $(modal).fadeOut('slow');
      return false;
    });
    var tag = $(this)[0].nodeName;
    if(tag == 'A') {
      return false;
    }
  });
});



// SP　Menu
$(function(){
  $('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.hd_logo').removeClass('open');
      $('.global').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('.hd_logo').addClass('open');
      $('.global').addClass('open');
      $('.overlay').addClass('open');
    }
  });
  $('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('.hd_logo').removeClass('open');
      $('.global').removeClass('open');
    }
  });
  $('.gmap').on('click',function(){
    if($('.overlay').hasClass('open')){
      $('.overlay').removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('.hd_logo').removeClass('open');
      $('.global').removeClass('open');
    }
  });
});



//複数行の省略文
jQuery(function($) {
  $('.textoverflow3 p').each(function() {
    var $target = $(this);

    // オリジナルの文章を取得する
    var html = $target.html();

    // 対象の要素を、高さにautoを指定し非表示で複製する
    var $clone = $target.clone();
    $clone
      .css({
        display: 'none',
        position : 'absolute',
        overflow : 'visible'
      })
      .width($target.width())
      .height('auto');

    // DOMを一旦追加
    $target.after($clone);

    // 指定した高さになるまで、1文字ずつ消去していく
    while((html.length > 0) && ($clone.height() > $target.height())) {
      html = html.substr(0, html.length - 1);
      $clone.html(html + '...');
    }

    // 文章を入れ替えて、複製した要素を削除する
    $target.html($clone.html());
    $clone.remove();
  });
});



//MVクラス付与
$(function(){
  $(document).ready(function() {
    $('.top_mv .anim_pic').addClass('rubberBand');
    $('.top_mv .anim_pic').addClass('animated');
  });
  $(window).load(function() {
    $('.top_mv .anim_pic').addClass('rubberBand');
    $('.top_mv .anim_pic').addClass('animated');
  });
});


//TOPページカレンダー　fixする位置にきたらクラス付与
$(function (){
  var $calendar = $('.top_calendar .inner');
  var $calHeader = $('.top_calendar .img_tit');
  var addClass = 'fixed';
  var targetPos;
  var targetEnd;
  var headerHeight;
  $(window).on('load resize', function(){
    targetPos = $calendar.offset().top;
    headerHeight = $calHeader.height();
    targetEnd = targetPos + $calendar.height() - headerHeight;
  });
  $(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    if(scrollPos > targetPos && scrollPos < targetEnd) {
        $calendar.addClass(addClass);
    } else {
        $calendar.removeClass(addClass);
    }
  });
});


//POPUP
$(function(){
  var scrollPosition;
  $('.search-result .refined-btn').on('click',function(){
    $('.search-result .popup-area').toggleClass('active');
    $('.search-result .popup-area').fadeIn();
    scrollPosition = $(window).scrollTop();
    $('body').stop().addClass('fixed').css({'top': -scrollPosition});
    return false;
  });
  $('.search-result .popup-close-area').on('click',function(){
    $('.search-result .popup-area').removeClass('active');
    $('.search-result .popup-area').fadeOut();
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , scrollPosition );
    return false;
  });
});
