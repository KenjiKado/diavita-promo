$(document).ready(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(".submenu").length || $(event.target).closest(".toggle").length || $(event.target).closest(".left-menu").length || $(event.target).closest(".menu-link").length) return;
    $(".submenu").slideUp("slow").removeClass('open');
    $('.left-menu').removeClass('open');
    $("body.menu-open").removeClass('menu-open');
    event.stopPropagation();
  });
	$("a.toggle").click(function(){
		var submenu = $(this).parent(".lang-choice").children('.submenu');
		console.log(submenu);
		if(submenu.hasClass('open')) submenu.slideUp("slow").removeClass('open');
		else{
			$(".submenu.open").slideUp("slow").removeClass('open');
			submenu.slideDown("slow").addClass('open');
		}
	});
		var messages, lang = $("html").attr("lang");

		if(lang == 'en'){
			messages = {
				'name': 'Please, enter your name',
				'email': "Please, enter the email",
				'phone': 'Please, enter a phone number',
				'country': 'Please, select a country'
			}
		}
		else if(lang == "bg"){
			messages = {
				'name': 'Моля, въведете име',
				'email': "Моля, въведете email",
				'phone': 'Моля, въведете телефонен номер',
				'country': "Моля, изберете държава"
			}
		}	
		else if(lang == "ro"){
			messages = {
				'name': ' Vă rugăm să introduceți numele',
				'email': " Vă rugăm să introduceți email",
				'phone': 'Vă rugăm să introduceți un număr de telefon',
				'country': 'Vă rugăm, selectați  țara'
			}
		}
		else if(lang == "es"){
			messages = {
				'name': 'Por favor, escribe un nombre',
				'email': "Por favor, introduzca su dirección de correo electrónico",
				'phone': 'Por favor, escribe un número de teléfono',
				'country': 'Por favor, selecciona un país'
			}
		}
		else if(lang == "it"){
			messages = {
				'name': ' Inserisci un nome',
				'email': "Inserisci l'indirizzo e-mail  ",
				'phone': 'Inserisci un numero di telefono',
				'country': 'Seleziona un paese'
			}
		}
		else if(lang == "th"){
			messages = {	
				'name': 'กรุณาลงชื่อ',
				'email': "กรุณา ป้อนอีเมล์",
				'phone': 'กรุณาใส่หมายเลขโทรศัพท์',
				'country': 'กรุณาเลือกประเทศ'
			}
		}	
		else if(lang == "vi"){
			messages = {
				'name': 'Vui lòng nhập tên',
				'email': "Vui lòng nhập email",
				'phone': 'Vui lòng nhập số điện thoại',
				'country': 'Vui lòng chọn quốc gia'
			}			
		}

		$("#registration").validate({
			'messages' : messages,
		});
		$("#newsletter1").validate({
			'messages' : messages,
		});
		$("#newsletter2").validate({
			'messages' : messages,
		});		
		$("form button").click(function(event) {
			var validate = $(this).parents('form').valid();	
		});

	$(".menu-link").click(function(event) {
		$('body').addClass('menu-open');
		$(".left-menu").addClass('open');
	});
	$(".btn").click(function(event) {
		var modal = $(this).attr('data-href');
		if(modal){
			$.fancybox.open({
				src  : '#modal',
				type : 'inline',
				scrolling : 'no'
			});				
		}
	});

	var owl = $("#slider");	
	owl.owlCarousel({
		items: 1,
		loop: true,
		autoplay:true,
		autoplayTimeout: 7500,
		autoplayHoverPause: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});	
	owl.on('changed.owl.carousel', function(e) {
		var activeId = $(e.target).find(".owl-item.active").find(".one-slide").attr("id");
		$(".slide-right span").removeClass('active')
		$(".slide-right span[data-id="+activeId+"]").addClass('active');
	});
	$("#comments").owlCarousel({
		items: 1,
		loop: true,
		autoplay:true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
	});	
	function getRandomInRange(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	setInterval(function(){
		var count1 = $("#count_comments").text();
		$("#count_comments").text(Number(count1)+1);

	}, getRandomInRange(5000, 15000));

	setInterval(function(){
		var count2 = $("#count_likes").text();
		$("#count_likes").text(Number(count2)+1);

	}, getRandomInRange(5000, 15000));

	setInterval(function(){
		var count3 = $("#count_fav").text();
		$("#count_fav").text(Number(count3)+1);

	}, getRandomInRange(5000, 15000))	
	if($("div").hasClass('parallax-block')){
		var controller = new ScrollMagic.Controller({globalScreneOptions: {triggerHook: 0, duration: "100%"}});
		new ScrollMagic.Scene({triggerElement: "#parallax"})
										.setTween("#parallax > div", {y: "25%", ease: Linear.easeNone})
										.addTo(controller);
	}									
});