$(function() {

    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。
    $("#header-icon, #header-rental-btn").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。


    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。
    $("#header2-fee-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-fee').offset().top });
    });
    $("#header2-time-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-time').offset().top });
    });
    $("#header2-notes-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-notes').offset().top });
    });
    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。

});