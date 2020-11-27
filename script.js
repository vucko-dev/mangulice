$(document).ready(function(){
	$("main>img").on('click',function(){
		$("main>img").css({
			'display':'none'
		});
		$("main").css({
			'width':'80%'
		});
		$("nav").not(":animated").toggle(200);
	});
	$("nav>div>img").on('click',function(){
		$("nav").not(":animated").toggle(200);
		$("main").css({
			'width':'100%'
		});
		$("main>img").css({
			'display':'block'
		});
	});
	$("a[href='#about']").on('click',function(){
		$("main>img").attr('src','img/black-menu.png');
		$("#layer-main, #gallery, #contact").css({
			'display':'none'
		});
		$('#about').css({
			'display':'block'
		});
		$("a[href='#about']").addClass('active');
		$("a[href='#gallery'],a[href='#contact']").removeClass('active');
	});
	$("a[href='#layer-main']").on('click',function(){
		$("main>img").attr('src','img/menu.png');
		$("#about, #gallery, #contact").css({
			'display':'none'
		});
		$('#layer-main').css({
			'display':'table'
		});
		$("a[href='#about'], a[href='#gallery'], a[href='#contact']").removeClass('active');
	});
	$("a[href='#gallery']").on('click',function(){
		$("main>img").attr('src','img/black-menu.png');

		$("#about, #layer-main, #contact").css({
			'display':'none'
		});
		$('#gallery').css({
			'display':'block'
		});
		$("a[href='#gallery']").addClass('active');
		$("a[href='#about'],a[href='#contact']").removeClass('active');
	});
	$("a[href='#contact']").on('click',function(){
		$("main>img").attr('src','img/black-menu.png');
		$("#about, #gallery, #layer-main").css({
			'display':'none'
		});
		$('#contact').css({
			'display':'block'
		});
		$("a[href='#contact']").addClass('active');
		$("a[href='#about'],a[href='#gallery']").removeClass('active');
	});

});