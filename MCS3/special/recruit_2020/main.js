
$(function () {
$(function () {

      // メニューを閉じる
       // クリック時の動作
    $('.menu-btn').on('click', function() {
      // メニューを閉じる
      if($(`.menu`).hasClass('is-active')){
          $(`.menu`).removeClass('is-active');
          $('.menu').removeClass('is-active');
      // メニューを開く
      } else {
          $(`.menu`).addClass('is-active');
          $('.menu').addClass('is-active');
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
      });
      });
      });

