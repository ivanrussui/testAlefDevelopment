// кнопка  бургер

$(document).ready(function () {
  $('.navbar__burger').click(function (event) { 
		$('.navbar__burger, .navbar__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


