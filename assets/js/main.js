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
/******/