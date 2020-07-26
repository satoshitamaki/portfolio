$(function() {

  // skill
  $('.skill__icon').on('mouseover', function(){

    // 要素を取得
    var num = $('.skill__icon').index(this);

    // 文字数を取得
    var moji = $('.skill__text').eq(num).text().length;

    // フォントサイズ
    var font_size = $('.skill__text').eq(num).css('font-size');

    console.log(font_size);

    // テキストを表示
    $('.skill__text').eq(num).css({'width':moji * font_size}).show();

  });
  // $(".skill__item").on("click", function(){

  //   // clickされた要素の番号を取得
  //   var num = $(".skill__item").index(this);

  //   // clickされる前のcurrentクラスを削除
  //   $(".skill__item").removeClass("skill__item--current");
  //   $(".skill__text").removeClass("skill__text--current");

  //   // clickした要素にcurrentクラスを追加
  //   $(this).addClass("skill__item--current");
  //   $(".skill__text").eq(num).addClass("skill__text--current");

  //   return false;

  // });

  // scroll
  $('a[href^="#"]').on("click", function(){

    // スクロールスピード
    var speed = 400;

    var header_height = $('.header').innerHeight();

    // hrefの値
    var href = $(this).attr("href");

    // 位置を取得
    var location = $(href).offset().top;

    // スクロールする
    $('body,html').animate({scrollTop:location}, {duration: speed, easing: 'swing'});

    return false;

  });

  // global-nav
  // $('.global-nav__item > a').on('click', function(){

  //   // clickされる前のcurrentクラスを削除
  //   $('.global-nav__item').removeClass('global-nav__item--current');

  //   // 新しいcurrentクラスを追加
  //   $(this).parent().addClass('global-nav__item--current');

  //   return false;

  // });

  // global-nav
  // $(window).on('scroll', function(){

  //   // profileの位置
  //   var profile_pos = $('#profile').offset().top;

  //   // skillの位置
  //   var skill_pos = $('#skills').offset().top;

  //   // workの位置
  //   var work_pos = $('#works').offset().top;

  //   // contactの位置
  //   var contact_pos = $('#contact').offset().top;

  //   // windowの上部
  //   var window_top = $(window).scrollTop();

  //   if(window_top > contact_pos){
  //     $('.global-nav__item').removeClass('global-nav__item--current');
  //     $('.global-nav__item').eq(3).addClass('global-nav__item--current');
  //   }else if(window_top > work_pos){
  //     $('.global-nav__item').removeClass('global-nav__item--current');
  //     $('.global-nav__item').eq(2).addClass('global-nav__item--current');
  //   }else if(window_top > skill_pos){
  //     $('.global-nav__item').removeClass('global-nav__item--current');
  //     $('.global-nav__item').eq(1).addClass('global-nav__item--current');
  //   }else{
  //     $('.global-nav__item').removeClass('global-nav__item--current');
  //     $('.global-nav__item').eq(0).addClass('global-nav__item--current');
  //   }

  //   if(window_top >= profile_pos){
  //     $('.header').animate({'padding':'20px 0'}, 'slow');
  //   }else{
  //     $('.header').stop(true, true).removeAttr('style');
  //   }

  //   return false;

  // });

});