
$(function () {
$(function () {
  // クリック時の動作
      // メニューを閉じる
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
      });

      $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#detail" || href == "id=detail" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
      });


      $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#qa" || href == "id=qa" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
      });



  


    //  ham.addEventListener('click', function(){
    //   ham.classList.toggle('clicked');
    //   // クリックされたらclickedを追加
    //   // toggleはクラスが含まれていれば削除、
    //   // 含まれていなければ追加する
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








