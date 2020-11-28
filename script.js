$(document).ready(function(){
	 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
	function Hide(){
		$("nav").not(":animated").toggle(200);
	
		$("main").css({
			'display':'block',
			'width':'100%'
		});
		$("main>img").css({
			'display':'block'
		});
	}
	$("main>img").on('click',function(){
		if($(window).width()>768){
		$("main>img").css({
			'display':'none'
		});
		$("main").css({
			'display':'block',
			'width':'80%'
		});
		$("nav").css({
			'width':'20%'
		});
		}else{
		$("main>img").css({
			'display':'none'
		});
		$("main").css({
			'display':'none'
		});
		$("nav").css({
			'width':'100%'
		});
		}
		$("nav").not(":animated").toggle(200);
	});
	$("nav>div>img").on('click',function(){
		$("nav").not(":animated").toggle(200);
	
		$("main").css({
			'display':'block',
			'width':'100%'
		});
		$("main>img").css({
			'display':'block'
		});
		
	});
	
	$("a[href='#about']").on('click',function(event){
		event.preventDefault();
		$("main>img").attr('src','img/black-menu.png');
		$("#layer-main, #gallery, #contact").css({
			'display':'none'
		});
		$('#about').css({
			'display':'block'
		});
		$("a[href='#about']").addClass('active');
		$("a[href='#gallery'],a[href='#contact']").removeClass('active');
		Hide();
	});
	$("a[href='#layer-main']").on('click',function(event){
				event.preventDefault();

		$("main>img").attr('src','img/menu.png');
		$("#about, #gallery, #contact").css({
			'display':'none'
		});
		$('#layer-main').css({
			'display':'table'
		});
		$("a[href='#about'], a[href='#gallery'], a[href='#contact']").removeClass('active');
		Hide();
	});
	$("a[href='#gallery']").on('click',function(event){
				event.preventDefault();

		$("main>img").attr('src','img/black-menu.png');

		$("#about, #layer-main, #contact").css({
			'display':'none'
		});
		$('#gallery').css({
			'display':'block'
		});
		$("a[href='#gallery']").addClass('active');
		$("a[href='#about'],a[href='#contact']").removeClass('active');
		Hide();
	});
	$("a[href='#contact']").on('click',function(event){
				event.preventDefault();

		$("main>img").attr('src','img/black-menu.png');
		$("#about, #gallery, #layer-main").css({
			'display':'none'
		});
		$('#contact').css({
			'display':'block'
		});
		$("a[href='#contact']").addClass('active');
		$("a[href='#about'],a[href='#gallery']").removeClass('active');
		Hide();
	});
	 $('#dugme').on('click',function(event){
    	event.preventDefault();
    	var namev=$('#imeiprezime').val()!=0;
    	var numv=$('#brojtelefona').val()!=0;
    	var emailv= IsEmail($('#email').val());
    	var textv=$('#poruka').val()!=0;
    	if(!namev||!numv||!emailv||!textv){
    		if(!namev){
    			$('#imeiprezime').addClass('error');
    		}else{
    			$('#imeiprezime').removeClass('error');
    		}
    		if(!numv){
    			$('#brojtelefona').addClass('error');
    		}else{
    			$('#brojtelefona').removeClass('error');
    		}
    		if(!emailv){
    			$('#email').addClass('error');
    		}else{
    			$('#email').removeClass('error');
    		}
    		if(!textv){
    			$('#poruka').addClass('error');
    		}else{
    			$('#poruka').removeClass('error');
    		}
    	}else{
    	    $('#imeiprezime').removeClass('error');
    		$('#brojtelefona').removeClass('error');
    		$('#email').removeClass('error');
    		$('#poruka').removeClass('error');
    		 $("#contact").click(function() {
    				var name= $("#imeiprezime").val();
    				var email= $("#email").val();
   					var message= $("#poruka").val();
	
        $.ajax({
  type: "POST",
  url: "https://mandrillapp.com/api/1.0/messages/send.json",
  data: {
    'key': 'TubBPNWJJLPIL4TlOFJvwQ',
    'message': {
      'from_email':email,
      'to': [
          {
            'email': 'davidvuckovucenovic@gmail.com',
            'name': 'RECIPIENT NAME (OPTIONAL)',
            'type': 'to'
          },
          {
            'email': 'RECIPIENT_NO_2@EMAIL.HERE',
            'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': name,
      'html': message
    }
  }
 }).done(function(response) {
   console.log(response); 
   $('#dugme').addClass('passed');
    	      $('#dugme').removeClass('fail');
    	      setTimeout(function(){
           location.reload(); 
      }, 2000);

 }).fail(function(response){
 	   console.log(response); 
 	      $('#dugme').removeClass('passed');
 	   $('#dugme').addClass('fail');
 });
    });
 }			
    	});	

});