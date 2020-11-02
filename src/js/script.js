$('#id'); // Обращение по индификатору (id) 1 элемент
$('.class'); // Обращение по классу .class Элементов может быть несколько
$('tag'); // Обращение по тегу клюбщьу тегу на странице так же используя вложенность tag.class (a.active)
$('*'); // Обращение ко всем элементам также вложенность пример class * (.active *)

$(document).ready(function () {
  $('.active-item');
});
$(document).ready(function () {
  $('#advantage');
});
$(document).ready(function () {
  $('*');
});
