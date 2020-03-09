
$(function () {
$(function () {
  // クリック時の動作
  $('.hamberger_line').on('click', function() {
      // メニューを閉じる
      if($(this).hasClass('open')) {
          $(this).removeClass('open');
          $('.hamberger_list').removeClass('open');
      // メニューを開く
      } else {
          $(this).addClass('open');
          $('.hamberger_list').addClass('open');
      }
  });
});

//■page topボタン
$(function(){
      var topBtn=$('#pageTop');
      topBtn.hide();



      //◇ボタンの表示設定
      $(window).scroll(function(){
        if($(this).scrollTop()>80){

          //---- 画面を80pxスクロールしたら、ボタンを表示する
          topBtn.fadeIn();

        }else{

          //---- 画面が80pxより上なら、ボタンを表示しない
          topBtn.fadeOut();

        }
      });



      // ◇ボタンをクリックしたら、スクロールして上に戻る
      $(function(){
      topBtn.click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;

      });

      $('.Toggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active'); //クラスを付与
        } else {
        $('.NavMenu').removeClass('active'); //クラスを外す
        }
        });
        });

      // ボタンスクロール
$(function(){
      $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#how-to" || href == "id=how-to" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#detail" || href == "id=detail" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });


      $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#qa" || href == "id=qa" ? 'html' : href);
        // var position = target.offset().top;
        var TargetOffset = $(Target).offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

      /**
 * スムーススクロール実行関数
 */
// let smoothScroll = (target, offset) => {
//   let toY;
//   let nowY = window.pageYOffset;      //現在のスクロール値
//   const divisor = 8;                  //近づく割合（数値が大きいほどゆっくり近く）
//   const range = (divisor / 2) + 1;    //どこまで近づけば処理を終了するか(無限ループにならないように divisor から算出)

//   //ターゲットの座標
//   const targetRect = target.getBoundingClientRect();   //ターゲットの座標取得
//   const targetY = targetRect.top + nowY - offset;      //現在のスクロール値 & ヘッダーの高さを踏まえた座標
//   //スクロール終了まで繰り返す処理
//   (function () {
//     let thisFunc = arguments.callee;                      //自身を呼び出すために変数に代入
//     toY = nowY + Math.round((targetY - nowY) / divisor);  //次に移動する場所（近く割合は除数による。）
//     window.scrollTo(0, toY);                              //スクロールさせる
//     nowY = toY;                                           //nowY更新

//     if (document.body.clientHeight - window.innerHeight < toY) {

//       //最下部にスクロールしても対象まで届かない場合は下限までスクロールして強制終了
//       window.scrollTo(0, document.body.clientHeight);
//       return;

//     }
//     if (toY >= targetY + range || toY <= targetY - range) {

//       //+-rangeの範囲内へ近くまで繰り返す
//       window.setTimeout(thisFunc, 10);

//     } else {

//       //+-range の範囲内にくれば正確な値へ移動して終了。
//       window.scrollTo(0, targetY);

//     }
//   })();
// };

// /**
//  * アンカータグにクリックイベントを登録
//  */
// const smoothOffset = headH;  //Fixされているヘッダーの高さ分スクロール先の座標をずらすために、変数に高さを入れておく
// const links = document.querySelectorAll('a[href*="#"]');  //#がリンクに含まれているアンカータグを全て取得
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function (e) {

//     const href = e.currentTarget.getAttribute('href');   //href取得
//     const splitHref = href.split('#');
//     const targetID = splitHref[1];
//     const target = document.getElementById(targetID);    //リンク先の要素（ターゲット）取得

//     if (target) {
//       smoothScroll(target, smoothOffset);
//     } else {
//       return true;
//     }
//     return false;
//   });
// }

    });
    //  ham.addEventListener('click', function(){
    //   ham.classList.toggle('clicked');
    //   // クリックされたらclickedを追加
    //   // toggleはクラスが含まれていれば削除、
    //   // 含まれていなければ追加する
    });
    });


    // var ham = document.getElementById('ham');
    // var menu_wrapper = document.getElementById('menu_wrapper');
    // ham, menu_wrapperの要素を取得




    // $('.ham_line1').click(function() {
    //   $(this).toggleClass(clicked)
    // });
    // $('.ham_line2').click(function() {
    //   $(this).toggleClass(clicked)
    // });
    // $('.ham_line3').click(function() {
    //   $(this).toggleClass(clicked)
    // });


    // $('#menu').click(function() {
    //   $(this).toggleClass(clicked)
    // });








