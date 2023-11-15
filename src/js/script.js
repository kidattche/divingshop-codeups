
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if($(".js-hamburger").hasClass('is-active')){
    $('.js-hamburger').removeClass("is-active");
     $("html").toggleClass("is-fixed");
    $(".js-sp-nav").fadeOut();
   } else {
    $(".js-hamburger").addClass("is-active");
    $(".js-sp-nav").fadeIn();

    }
  });


});

//ローディング
$(function () {
  function end_loader() {
    $('.loader').fadeOut(500, function(){
      // ローダーがフェードアウトした後に以下のコードを実行
      $('.mv').fadeIn(300); // .mvを表示
    });
  }

const jsLoaderBg = '.loader' // カーテン（白い背景）
const jsTextbox = '.text-box' //テキストボックス
const jsText = '.p-swiper-desc'//メインビジュアルのタイトル
/*const jsLeftimg = '.loading__left-image'
const jsRightimg = '.loading__right-image'*/
const mv = '.mv'
const tl = gsap.timeline();

tl.to(
  jsTextbox, {
    opacity: 1,
    duration: 0.8,
    delay: 0.8,
  },
)
.to(
  jsTextbox, {
    opacity: 0,
  }
)
.to(".js-load-img",
{
  y:0,
  duration: 1,
  stagger:0.2,
  delay: 0
})
.to("#container",{
opacity: 0,
display:"none",
})
.to(
  jsLoaderBg, {
    opacity: 0,
    display:"none",
  }
)
})



//swiper
window.addEventListener('load', () => {
  const elem = document.querySelector('.p-swiper-container');
  if (elem === null) return;
  const swiperParams = {
    loop: true, // ループさせる
    effect: 'fade', // フェードのエフェクト
    autoplay: {
      delay: 3000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    speed: 4000, // ２秒かけながら次の画像へ移動
    allowTouchMove: false, // マウスでのスワイプを禁止
    navigation: {
      // 左右のページ送りを有効にする
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true, //この行を追記する
    },
  };
  const swiper = new Swiper('.p-swiper-container', swiperParams);
});

// Campaignスライド

const swiper = new Swiper('.campaign-swiper__container', {
  loop: true,
  autoplay: {
      delay: 0,
  },
  spaceBetween: 24,
  freeModeSticky: true,
  //autoWidth: true,
  speed: 4000,          //追記
  slidesPerView: 'auto',    //追記
  breakpoints: {
    375: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },

    540: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    630: {
      slidesPerView: 2.2,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3.7,
      spaceBetween: 40,
    },
  },
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    clickable: true
	}
});


//information・voice・price
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight){
            $(this).addClass('active');
          }
      });
    });
  $(window).scroll(function (){
    {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
    }
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
});


//headerクラス付与
let header = $('.header');
let headerHeight = $('.header').height();
let height =$('.mv').height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height - headerHeight) {//メインビューの高さから、headerの高さをひいてあげるコード。メインビュー以下になった時にパッと切り替わるようになる！
    header.addClass('is-color');
  } else {
    header.removeClass('is-color');
  }
});