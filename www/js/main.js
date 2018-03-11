$(document).ready( function(){
    
    // テスト用ボタンが押された場合
    $("#btnTest").click(function() {
        
        // 講義のメニューを呼び出す
        var url = "http://teleapolist.info/speech/20180213_KJdaigaku.html";
        
        // 取得したurlをiframeに埋め込む
        $('#kougiMain').html("<iframe id=\"iframe\" src=\"" + url + "\" width=\"100%\" height=\"500\"></iframe>");

	    return false;
    });
    
    // 運用ボタンが押された場合
    $("#btnMain").click(function() {
        
        // 講義のメニューを呼び出す
        var url = "https://mb.api.cloud.nifty.com/2013-09-01/applications/UeqZMutU5uzxb30f/publicFiles/KJdaigaku.html";
        
        // 取得したurlをiframeに埋め込む
        // $('#kougiMain').html("<iframe id=\"iframe\" src=\"" + url + "\" width=\"100%\" height=\"500\"></iframe>");
        $('#kougiMain').html("<iframe id=\"iframe\" src=\"" + url + "\" width=\"100%\" height=\"500\" frameborder=\"0\" scrolling=\"no\" width=\"1090\" height=\"5603\" style=\"transform:scale(0.55);-o-transform:scale(0.55);-webkit-transform:scale(0.55);-moz-transform:scale(0.55);-ms-transform:scale(0.55);transform-origin:0 0;-o-transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;\"></iframe>");
        
        $('#iframe').contents().find('head').append('<link href="http://teleapolist.info/syun_work/kougi/addElement.css" rel="stylesheet" type="text/css" media="all" />');
        
        
        return false;
    });
    
	
	// ajaxは使用しない
	// --------------------------------------------------------------------
	// $.ajax({
	// type : 'POST',
	// dataType : 'text',
	// url : url,
	// success : function(data) {
	// 
	// var resDataList = data.split("a href=");
	// var listSize = resDataList.length;
	// console.log("リストのサイズは：" + listSize);
	// 
	// //
	// var lastVal = resDataList[listSize - 1];
	// var cutLastVal = resDataList[listSize - 1].split(">");
	// var url = cutLastVal[0].replace("'", "");
	// url = url.replace("'", "");
	// 
	// document.addEventListener("deviceready", onDeviceReady, false);
	// function onDeviceReady() {
	// alert("InAppBrowserプラグインで\"" + url + "\"をiframeで読み込みます");
	// }
	// 
	// // window.open(url, '_system', 'location=yes');
	// // $('#info').html(url);
	// url = "https://www.yahoo.co.jp/";
	//             
	// // 取得したurlをiframeに埋め込む
	// $('#kougiMain').html("<iframe src=\"" + url + "\" width=\"100%\"
	// height=\"500\"></iframe>");
	//             
	// return false;
	// 
	// },
	// error : function(XMLHttpRequest, textStatus, errorThrown) {
	// $('#info').html("ajax通信に失敗しました。");
	// }
	// });
	// --------------------------------------------------------------------

});
