$(function () {
  /************* PC BURGER *************/

  //fvスクロール後にフェードイン
  var mainPos = $(".fv").outerHeight();
  $(window).scroll(function () {
    //fvより下の時フェードイン
    if ($(window).scrollTop() > mainPos) {
      $(".pc-burger").fadeIn();
    } else {
      //fvより上の時フェードアウト
      $(".pc-burger").fadeOut();
    }
  });

  //バーガーをクリックした時
  //1.メニューを開く/閉じる
  //2.バーガクロスになる/バーガーに戻る(.crossを追加/消す)
  $(".pc-burger").click(function () {
    $("#nav-open-pc").fadeToggle(300);
    $(this).toggleClass("cross");
  });

  //バーガーメニュー内のナビクリック時
  //1.メニューを閉じる
  //2.クロスを消す
  $(".scroll-btn").click(function () {
    $("#nav-open-pc").fadeOut(300);
    $(".pc-burger").removeClass("cross");
  });

  //.pc-open-60(ナビ開いてる時の左側)クリック時
  //1.メニューを閉じる
  //2.クロスを消す
  $(".pc-open-60").click(function () {
    $("#nav-open-pc").fadeOut(300);
    $(".pc-burger").removeClass("cross");
  });

  /************* SP BURGER *************/

  //バーガーをクリックした時
  //1.メニューを開く/閉じる
  //2.バーガクロスになる/バーガーに戻る(.crossを追加/消す)
  //3.本文をスクロールさせない/させる
  $(".sp-burger").click(function () {
    $("#nav-open-sp").fadeToggle(300);
    $(this).toggleClass("cross");
    $("body").toggleClass("no-scroll");
  });

  //バーガーメニュー内のナビクリック時
  //1.メニューを閉じる
  //2.クロスを消す
  //3.ノースクロールを消す
  $(".scroll-btn").click(function () {
    $("#nav-open-sp").fadeOut(300);
    $(".sp-burger").removeClass("cross");
    $("body").removeClass("no-scroll");
  });

  /************** ナビスクロール **************/
  //スクロールボタンクリック時
  //２０px分開けてスクロール先を表示
  var headerHeight = 0;
  $(".scroll-btn").click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html,body").animate(
      {
        scrollTop: position,
      },
      500,
      "swing"
    );
    return false;
  });

  /************** FV矢印クリックでアバウトへ **************/
  var headerHeight = 0;
  $(".arrow").click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html,body").animate(
      {
        scrollTop: position,
      },
      500,
      "swing"
    );
    return false;
  });

  /************** スライダー **************/

  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: false,
    dots: true,
    vertical: true,
    infinite: true,
    slidesToShow: 1,
  });

  /************** Scroll to TOP **************/
  $("#pageTop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
