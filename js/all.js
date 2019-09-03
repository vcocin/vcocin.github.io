

//YOUTUBE全屏影片背景js--vidbacking
$(function(){
	
	$('.head-video').vidbacking({
		//'masked': true						
		//需要遮色片的呼叫方式，如不需要遮色片，不要寫入這行

	});
	
	$(window).resize(function() {

		//修改YOUTUBE全屏影片背景js的高度顯示方式
		//在該區背後放一張透明圖片自動抓取該圖片高度來達到響應示效果
		$(".head-video").height($(".head-video img").outerHeight());

		//跟等高插件jQuery Equal Height高度計算出現跑版錯誤的解決方案，不然resize時高度會不改變
		//$('.head-video video').css("height","auto");
	});

});




//首頁底部SLIDE插件js--owl-carousel
$('.owl-carousel').owlCarousel({
	autoplay:true,							//自動播放，值為true或false
	autoplayTimeout:10000,					//多久轉動一次
	autoplayHoverPause:true,				//滑鼠HOVER暫停，值為true或false
	loop:true,								//重覆循環，值為true或false
	margin:16,								//右邊邊距
	stagePadding: 9,						//左右兩側留白
	rtl: false,								//改變左右播放方向，值為true或false
	touchDrag:true,							//觸碰拖曳功能開啟，值為true或false
	mouseDrag:true,							//是否可以使用鼠标拖拽，值為true或false
	dots:false,								//圓點控制項開關，值為true或false
	dotsContainer:"",						//圓點控制項開關,不可跟NAV指定同一個DOM
	dotsEach:false,							//每多少項為一個控制點，值為true或false，可設數字
	responsiveRefreshRate:0,				//左右縮放網頁時，要延遲多久才RESIZE內容

	nav:true,								//左右輪轉按鈕開關，值為true或false
	navContainer:".owl-carousel",			//可把左右切換按鈕放到你指定的DOM內
	navSpeed:100,							//輪播切換的速度控制

	//******更改上下輪播按鈕的內容文字，可寫HTML進去，JS格式是陣列******
	navText:[
		'<img src="img/lefticon@2x.png" alt="YOUTUBE示意圖" style="width:52px;height:52px;">',
		'<img src="img/righticon@2x.png" alt="YOUTUBE示意圖" style="width:52px;height:52px;">'
	],	

	responsive:{							//定義多少寬度出現多少內容，冒號前是螢幕寬度
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
});

//首頁底部SLIDE插件js--owl-carousel的手機拖曳功能開啟設定
$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
	if (e.deltaY>0) {
		owl.trigger('next.owl');
	} else {
		owl.trigger('prev.owl');
	}
	e.preventDefault();
});//首頁底部SLIDE插件js--owl-carousel的手機拖曳功能-END




//首頁底部SLIDE圖片高度控制
//等高插件js--Equal Height，第一個是父元素DOM名稱，第二個填要等高的區塊DOM
$(window).on('load', function(event) {
	$('.EqualHeight').jQueryEqualHeight('.slide-img');
});

$(window).resize(function(event) {
	$('.EqualHeight').jQueryEqualHeight('.slide-img');
});




//其他js
$(document).ready(function(){

	//wow.js啟動
	var wow = new WOW(
	  {
		boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
		animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
		offset:       0,          // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
		mobile:       true,       // 手機上是否要套用動畫 (預設是true)
		live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
		callback:     function(box) {
		  // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
		},
		scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
	  }
	);
	
	new WOW().init();
	
	//選單下捲變色
	$(window).scroll(function(e){
		if ($(window).scrollTop()>0)
		$(".new-navbar").addClass("bg-w");
		else
		$(".new-navbar").removeClass("bg-w");
	});

	//側邊欄到表單區消失
	$(window).load(function(){

		//設定網頁頂部位子
		var winTOP = $(window).scrollTop();

		//抓取要固定之物件與頁面上方的距離
		var _targetOffset = $(".card-3").offset().top;
		
		//抓取要固定之物件之高度
		var _targetOffset_height = $(".card-3").outerHeight(true);

		if ( winTOP > _targetOffset-400 )
		$(".scroll-fix").addClass("scroll-fix-none");
		else
		$(".scroll-fix").removeClass("scroll-fix-none");
		
		if ( winTOP > _targetOffset + _targetOffset_height )
		$(".scroll-fix").removeClass("scroll-fix-none");
		
	});
	
	$(window).scroll(function(){

		//設定網頁頂部位子
		var winTOP = $(window).scrollTop();

		//抓取要固定之物件與頁面上方的距離
		var _targetOffset = $(".card-3").offset().top;
		
		//抓取要固定之物件之高度
		var _targetOffset_height = $(".card-3").outerHeight(true);

		if ( winTOP > _targetOffset-400 )
		$(".scroll-fix").addClass("scroll-fix-none");
		else
		$(".scroll-fix").removeClass("scroll-fix-none");
		
		if ( winTOP > _targetOffset + _targetOffset_height )
		$(".scroll-fix").removeClass("scroll-fix-none");
	});


	//首頁FOOTER左右側高度控制
	//--兩側區塊不等高JS
	//當載入網頁時的功能
	//網頁寬度大於767PX，則自動抓取最高DIV高度，然後指定給每個DIV，反之則移除每個DIV高度!
	$(window).load(function(){

		if($(window).innerWidth() > 992){
			//或用 attr("style","");
			$(".company-block").removeAttr("style");

			var SAMEheights = $(".company-block").map(function () {
			return $(this).height();
			}).get(),

			TitlemaxHeight = Math.max.apply(null, SAMEheights);

			$(".company-block").height(TitlemaxHeight);
		}

		else{
			//或用 removeAttr("style");
			$(".company-block").attr("style","");
			}
	});

	//當縮放網頁時的功能
	//網頁寬度大於767PX，則自動抓取最高DIV高度，然後指定，反之則移除每個DIV高度!
	$(window).resize(function(){

		if($(window).innerWidth() > 992){

			//或用 attr("style","");
			$(".company-block").removeAttr("style");

			var SAMEheights = $(".company-block").map(function () {
			return $(this).height();
			}).get(),

			TitlemaxHeight = Math.max.apply(null, SAMEheights);

			$(".company-block").height(TitlemaxHeight);
		}

		else{
			//或用 removeAttr("style");
			$(".company-block").attr("style","");
			}
	});

});