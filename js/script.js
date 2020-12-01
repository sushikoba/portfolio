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

 /*************  モダル  **************/
 // 各５つの.modal-btnクリック時
 // html内でdata-targetに設定されている各モダルを開く（fadeIn）
 // bodyにno-scrollクラスを追加
 $('.modal-btn').each(function(){
    $(this).on('click',function(){
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
        $('body').addClass('no-scroll');
        return false;
    });
});

// モダルが開いている時.modal-closeをクリックした時
// モダル自体閉じる（fadeOut）
// bodyからno-scrollクラスを取る
$('.modal-close').on('click',function(){
    $('.modal-style').fadeOut();
    $('body').removeClass('no-scroll');
    return false;
}); 

// モダルが開いている時モダル自体をクリックした時
// モダル自体閉じる（fadeOut）
// bodyからno-scrollクラスを取る
 $('.modal-style').click( function(){
    $(this).fadeOut();
    $('body').removeClass('no-scroll');
  } );

// ただし、インナー部分をクリックしたときはモダルを閉じさせない。
  $( '.modal-inner' ).on( 'click', function( e ){
    e.stopPropagation();
  } );

  // inner内のリンクをクリックした時
  // モダル自体閉じる（fadeOut）
  // bodyからno-scrollクラスを取る
  $('.modal-inner-contents-link').click( function(){
    $('.modal-style').fadeOut();
    $('body').removeClass('no-scroll');
  } );
  

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
