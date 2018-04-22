/**
 * GLOBAL 
 */
var loopFlg = 0;
var loopKougiFlg = 0;
var loopTime = 4000;
var kougiUrl = "";


$(window).load( function(){
    console.log("1");
    
    /*
    以下の文字列でユーザーエージェントを判別します
    osVer = "iPhone";
    osVer = "Android";
    osVer = "iPod";
    osVer = "iPad";
    */
    // // iOSの場合の表示処理を設定する
    // if (navigator.userAgent.match(/iPhone|iPad|iPod/i)){
    //     
    //     console.log("ui = ios");
    //     setButtonMainCss(1);
    //     
    // } else {
    //     
    //     console.log("ui = android");
    //     setButtonMainCss(2);
    //     
    // } 
    
//     // テスト用ボタンが押された場合
//     $("#btnTest").click(function() {
//         
//         // 講義のメニューを呼び出す
//         var url = "http://teleapolist.info/speech/20180213_KJdaigaku.html";
//         
//         // 取得したurlをiframeに埋め込む
//         $('#kougiMain').html("<iframe id=\"iframe\" src=\"" + url + "\" width=\"100%\" height=\"500\"></iframe>");
// 
//         return false;
//     });
//     
//     // 終了ボタンが押された場合
//     $('#btnEnd').click(function() {
//         
//         // ループ終了
//         loopFlg = 1;
//         console.log("ループ終了");
//     });
    
    // html取得ボタンが押された場合
    $('#btnget').click(function() {
        
        
        // 再読み込み防止のため、polling
        if (loopFlg == 0) {
            callAjaxTop();
        } else {
            callAjaxKougi();
            
        }
        setTimeout(function(){$('#btnget').trigger('click');}, loopTime);
        
    });
    
    
    // 全文ボタンが押された場合
    $('#btnAlls').click(function() {
        
        
        // 再読み込み防止のため、polling
        if (loopKougiFlg == 0) {
           
            callAjaxKougi();
            
        }
        setTimeout(function(){$('#btnAlls2').trigger('click');}, loopTime);
        
    });
    
    // 全文ボタンが押された場合
    $('#btnAlls2').click(function() {
        
        
        // 再読み込み防止のため、polling
        if (loopKougiFlg == 0) {
           
            callAjaxKougi2();
            
        }
        setTimeout(function(){$('#btnAlls2').trigger('click');}, loopTime);
        
    });
    
    // 
    // 
    // // 文字サイズボタンが押された場合
    // $('#btnSize').click(function() {
    //     
    //     if ("文字サイズ大" == $('#btnSize')[0].innerHTML) {
    //         $('#btnSize')[0].innerHTML = "文字サイズ小";
    //         $('#kougiMain').find('div').css('font-size','120%');
    //         
    //     } else {
    //         $('#btnSize')[0].innerHTML = "文字サイズ大";
    //         $('#kougiMain').find('div').css('font-size','80%');
    //     }
    //     
    //     
    // });
    // 
    // // 全文ボタンが押された場合
    // $('#btnAlls').click(function() {
    //           
    //     // 全文リンクのurlを取得
    //     var allUrl = $('.header > a').attr('href');
    //     
    //     if (allUrl == "") {
    //         alert("urlが取得出来ませんでした");
    //         return;
    //     }
    //     
    //     alert(allUrl + "へのajax通信を開始します");
    //     
    //     $.ajax({
    //         url　: allUrl,
    //         dataType : 'html',
    //         success　: function(data){
    //             console.log("success allHtml : " + data);
    //             $('#kougiMain').html(data);//A
    //           
    //             
    //         },
    //         error: function(data){
    //             console.log("error : " + data);
    //             $('#kougiMain').html(data);//A
    //         }
    //     });
    //     
    //     
    // });
    // 
    // 
    console.log("3");
    
});

function callAjaxTop() {
    $.ajax({
            url　: 'https://mb.api.cloud.nifty.com/2013-09-01/applications/UeqZMutU5uzxb30f/publicFiles/KJdaigaku.html',
            dataType : 'html',
            success　: function(data){
                
                console.log('loop...');
                
                $('#kougiMain').html(data);//A
                
                // html取得後のリンク押下処理
                $('.waku > a').click(function(){
                    loopFlg = 1;
                    kougiUrl = $('.waku > a').attr('href');
                    console.log('loop終了');
                    return false;
                })
                
            },
            error: function(data){
                
                $('#kougiMain').html(data);//A
            }
        });
}

function callAjaxKougi() {
    
    console.log("callAjaxKougi");
    
    // 再読み込み防止のため、polling
    if (loopKougiFlg == 0) {
        
        $.ajax({
            url　: "http://192.168.3.13:50013/",
            dataType : 'html',
            success　: function(data){
                $('#kougiMain').html(data);//A
      
            },
            error: function(data){
                console.log("error ajax");
            }
        });
        
    
    }
}


function callAjaxKougi2() {
    
    console.log("callAjaxKougi2");
    
    // 再読み込み防止のため、polling
    if (loopKougiFlg == 0) {
        
        $.ajax({
            async:false,
            url　: "http://192.168.3.13:50013/",
            dataType : 'html',
            success　: function(data){
                $('#kougiMain').html(data);//A
      
            },
            error: function(data){
                console.log("error ajax");
            }
        });
        
    
    }
}

// function setButtonMainCss(ui) {
//     
//     // 1をiosとしてとして設定する
//     if (ui == 1) {
//         
//         // 運用ボタンが押された場合
//         $("#btnMain").click(function() {
//         
//             callKougi();            
//                 
//         });
//     } else {
//         
//         // 運用ボタンが押された場合
//         $("#btnMain").click(function() {
//             
//             // 講義のメニューを呼び出す
//             var url = "https://mb.api.cloud.nifty.com/2013-09-01/applications/UeqZMutU5uzxb30f/publicFiles/KJdaigaku.html";
//             
//             $('#kougiMain').html("<iframe id=\"iframe\" src=\"" + url + "\" width=\"180%\" height=\"900px\" frameborder=\"0\" scrolling=\"no\" width=\"1090\" height=\"5603\" style=\"transform:scale(0.55);-o-transform:scale(0.55);-webkit-transform:scale(0.55);-moz-transform:scale(0.55);-ms-transform:scale(0.55);transform-origin:0 0;-o-transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;\"></iframe>");
//                         
//             return false;
//         });
//         
//         
//     }
//     
// }

// function callKougi() {
//     
//     if (loopFlg == 1) {
//         return;
//     }
//     
//     console.log("reload...");
//  
//     // waitはPromiseを返すので、doneをメソッド・チェーンできます。
//     wait(5).done(function () {
//             openKougi();
//             callKougi();
//     });
//     
// }
// 
// // 処理を引数ミリ秒停止する
// function wait(sec) {
// 
//     // jQueryのDeferredを作成します。
//     var objDef = new $.Deferred;
// 
//     setTimeout(function () {
// 
//         // sec秒後に、resolve()を実行して、Promiseを完了します。
//         objDef.resolve(sec);
// 
// 
//     }, sec*1000);
// 
//     return objDef.promise();
// 
// };
// 
// // 講義のページを開く
// function openKougi () {
//     
//     // 講義のメニューを呼び出す
//     var url = "https://mb.api.cloud.nifty.com/2013-09-01/applications/UeqZMutU5uzxb30f/publicFiles/KJdaigaku.html";
// 
//     // width:180%
//     // height:900px
//     $('#kougiMain').html("<iframe id=\"iframe\" src=\"" + url + "\" width=\"180%\" height=\"900px\" frameborder=\"0\" scrolling=\"no\" width=\"1090\" height=\"5603\" style=\"transform:scale(0.55);-o-transform:scale(0.55);-webkit-transform:scale(0.55);-moz-transform:scale(0.55);-ms-transform:scale(0.55);transform-origin:0 0;-o-transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;\"></iframe>");
// 
//     return false;
// }