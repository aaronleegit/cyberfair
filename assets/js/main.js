$('.carousel').carousel({
    interval: 1000 * 3
});
/***設定文繞圖與文字齊高***/
var $l_img = $('img.l-img');
var $r_img = $('img.r-img');
$l_img.each(function(){
	$this = $(this);
	$parent = $this.parent();
	if($parent.height() < $this.height()){
		$parent.height($this.height());
	}
})

$r_img.each(function(){
	$this = $(this);
	$parent = $this.parent();
	if($parent.height() < $this.height()){
		$parent.height($this.height());
	}
})
/***文章層次***/
$('p').each(function(){
	//console.log($(this).prev().prop("tagName"));
	if($(this).prev().prop("tagName")=='H3'){
		$(this).css('margin-left','1.5em');
	}
})
$('H3').each(function(){
	//console.log($(this).prev().prop("tagName"));
	if($(this).prev().prop("tagName")=='H2'){
		$(this).css('margin-left','0.6em');
	}
})
/******/