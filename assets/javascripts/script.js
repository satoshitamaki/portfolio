$(function() {

  // skill
  $(".skill__item").on("click", function(){

    // clickされた要素の番号を取得
    var num = $(".skill__item").index(this);

    // clickされる前のcurrentクラスを削除
    $(".skill__item").removeClass("skill__item--current");
    $(".skill__text").removeClass("skill__text--current");

    // clickした要素にcurrentクラスを追加
    $(this).addClass("skill__item--current");
    $(".skill__text").eq(num).addClass("skill__text--current");

    return false;

  });

});