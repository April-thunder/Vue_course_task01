// Скрипт модального окна

$(document).ready(function(){

	//Функция, отключающая скролла
	function disableScroll()
	{
		$('html, body').css("overflow","hidden")
		$('html, body').css("width","100%")
			return false;
	}
	
	//Функция, включающая скролл
	function enableScroll()
	{
		$('html, body').css("overflow","initial")
			return false;
	}

	//Отключается модальное окно при клике вне этого окна, включается скролл
	$('.popup-container').click(function(event){
		if(event.target == this){
			$(this).fadeOut(600, enableScroll);
	};
	});

	// Вызов окна мобильного меню
	$('.menu__btn').click(function () {
		$('.mobile-container').fadeIn(600, disableScroll);
	});

	// Закрытие мобильного меню
	$('.close-icon').click(function() {
		event.preventDefault(); 
		$('.mobile-container').fadeOut(300, enableScroll);
	});

	//Плавный переход к секциям

	$('ul a').on('click', function(event){
		event.preventDefault();
		let href = $(this).attr('href');
		let offset = $(href).offset().top;
		$('body,html').animate({scrollTop: offset,}, 700);
	});

})
