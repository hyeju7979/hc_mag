$(document).ready(function () {

    hc_detail_slide();

    //내사이즈 찾기이동
    hc_move_mySize();

	//앱설치 안내 문구
	hc_MK_guideapp();

	hc_realtimeBtn();

	//스페셜 프라이스 슬라이드
	hc_specialPrice_slide();

});

function hc_specialPrice_slide(){
	if(jq1112("#hc_spcialPriceSlide").length < 1 || jq1112("#hc_spcialPriceSlideText").length < 1){
        return;
    }

	specialPriceSlide = jq1112('#hc_spcialPriceSlide').bxSlider({
		auto : true,
        pager: false,
		controls : false,
        mode : "fade",   //효과 horizontal,fade
        pause : 4000,    //이미지가 정지해있는 시간
        speed : 300      //이미지가 변하는데 걸리는 시간
	});


	specialPriceSlideText = jq1112('#hc_spcialPriceSlideText').bxSlider({
		auto : true,
        pager: false,
		controls : false,
        mode : "fade",   //효과 horizontal,fade
        pause : 4000,    //이미지가 정지해있는 시간
        speed : 300      //이미지가 변하는데 걸리는 시간
	});

	//이전버튼
	jq1112("#hc_spcialPriceSlide-prev").on("click",function(){
		specialPriceSlide.goToPrevSlide();
		specialPriceSlideText.goToPrevSlide();
	});

	//다음버튼
	jq1112("#hc_spcialPriceSlide-next").on("click",function(){
		specialPriceSlide.goToNextSlide();
		specialPriceSlideText.goToNextSlide();
	});
}

function hc_MK_guideapp(){
	var $mkguide = $("#MK_guideapp");
	$mkguide.find('dl dt').html('매그제이 앱 다운받으시고');
	$mkguide.find('dl dd').html('즉시사용 가능한 3,000원 할인쿠폰 받으세요. <br />-');

	$mkguide.find('div.btns .cancel').text('앱설치하고 더많은 혜택 받기');
	$mkguide.find('div.btns #powerappMove').text('웹페이지로 계속하기');
}

function hc_move_mySize(){
    jq1112("div[data-type='snapfit_resultview_iframe']").off("click");
    jq1112("div[data-type='snapfit_resultview_iframe']").on("click",function(){
	    var height = jq1112("#snapfit_resultview_iframe").offset().top - 30;
	    jq1112(document).scrollTop(height);
    });
}


// 디테일 슬라이드 : 상품등록시 디테일 페이지 슬라이드
function hc_detail_slide(){
	if(jq1112("#detailSlide").length < 1){
        return;
    }

	detailSlide = jq1112('#detailSlide').bxSlider({
		auto : true,
        pager: false,
		caption : true,
		controls : false,
        mode : "fade",   //효과 horizontal,fade
        pause : 7000,    //이미지가 정지해있는 시간
        speed : 150,      //이미지가 변하는데 걸리는 시간
		onSliderLoad : function(c){
			var cnt = jq1112("#detailSlide li").length;
			$(".hc_total_num").text(cnt);
		},
		onSlideAfter : function($e, o, n){
			$(".hc_current_num").text(n+1);
		},
		onSlideBefore : function($e, o, n){
			$(".hc_current_num").text(n+1);
		}
	});

	//이전버튼
	jq1112("#detailSlide-prev").on("click",function(){
		detailSlide.goToPrevSlide();
	});

	//다음버튼
	jq1112("#detailSlide-next").on("click",function(){
		detailSlide.goToNextSlide();
	});
}

function hc_realtimeBtn(){
  jq1112("div.hc_realtimeBtn a").on("click",function(e){
    e.preventDefault();
    jq1112("#option_stock_wrap").show();
    $(".nano").nanoScroller();

  });

  jq1112("#hc_realtimeBtn_close").on("click",function(){
    jq1112("#option_stock_wrap").hide();
  });

}
