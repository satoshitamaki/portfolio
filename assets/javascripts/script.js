$(function() {

  $(window).on('load resize', function(){

    // 画面の横幅
    var win_wid = $(window).width();

  });

  // skill
  $('.skill').on('mouseover', function(){
    
    // 何番目の要素にマウスが乗っているか
    var num = $('.skill').index(this);

    // テキストの位置
    var height_offset = $(this).find('.skill__text').height() + $(this).find('.skill__icon').height()/2 + 6;

    var width_offset = $(this).width()/2 - $(this).find('.skill__text').width()/2 - 12;

    // // アイコンの高さの半分を取得
    // var icon_height = $(this).height();

    // // アイコンの幅を取得
    // var icon_width = $(this).find('.skill__text').width()/2 - $(this).width() / 2 + 12;

    // // tipを表示する位置
    // var tip_offset = text_height + (icon_height/2) + 6;

    // マウスが乗ってる要素にクラスを追加

    $(this).addClass('skill--active').find('.skill__text').css({'top':'-'+height_offset+'px', 'left':width_offset+'px'});
    // $('.skill').eq(num).addClass('skill--active').find('.skill__text').css({'top':'-'+tip_offset+'px', 'left':'-'+icon_width+'px'});

    console.log(text_height);

  }).on('mouseout', function(){

    $('.skill').removeClass('skill--active');

  });

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