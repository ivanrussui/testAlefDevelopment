// document.getElementsByClassName('.cards__button').function	() {

// 	const btn = document('.cards__button');

// 	btn.on('click', function () {
		
// 	});
// }

// цвет меняется но во всех и обратно нет
$(document).ready(function () {
	$('.cards__button').click(function (event) {
		$('.cards__button').css('background-color', 'black');
		$('.cards__button').html('Продан');
	});
});