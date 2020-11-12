$(document).ready(function() {
  
  const btn = $('#arrow');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
	});
	
  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 850) {
  //     btn.removeClass('show');
  //   } else {
  //     btn.addClass('show');
  //   }
	// });
	// это функция чтобы исчезала кнопка

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});