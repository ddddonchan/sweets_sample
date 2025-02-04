// メニューがクリックされたらドロワーメニューを開く
jQuery(".header-menu").on("click", function () {
  jQuery(".drower-menu").slideToggle();
})


// topへ戻るボタンを表示
jQuery(document).ready(function () {
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 80) {
      // 80pxを超えたらボタンをフェードイン表示
      jQuery(".btn-footer-top").fadeIn();
    } else {
      // 80px未満ならボタンをフェードアウト非表示
      jQuery(".btn-footer-top").fadeOut();
    }
  })
})

// topボタンをクリックしたらスクロールしてtopへ戻る
jQuery(".btn-footer-top").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, 500);
})


// モーダルで画像の拡大表示
jQuery(".js-cake-img").click(function(){
  var imgSrc = jQuery(this).prop("src");//src属性を取得
  jQuery(".menu-bigimg").prop("src",imgSrc);//拡大htmlのsrc属性に上書き
  jQuery(".menu-modal").fadeIn();//フェードイン表示
  jQuery("body").css("overflow", "hidden");//画面下をスクロールさせない
  return false;
});
jQuery(window).click(function(){//画面のどこかがクリックされたら
  jQuery(".menu-modal").fadeOut();//フェードアウト表示
  jQuery("body").css("overflow","auto");//スクロールロック解除
});