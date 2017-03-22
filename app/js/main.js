var h = document.getElementById('header');

if (window.pageYOffset != 0) {
	h.classList.remove('header');
	h.classList.add('headerscroll');
}

if (window.pageYOffset == 0) {
	h.classList.remove('headerscroll');
	h.classList.add('header');
}

$(document).ready(function(){

	$(window).scroll(function() {
	if (window.pageYOffset != 0) {
	h.classList.remove('header');
	h.classList.add('headerscroll');
}

if (window.pageYOffset == 0) {
	h.classList.remove('headerscroll');
	h.classList.add('header');
}

});

$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
  if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
  }
  return false; // выключаем стандартное действие
  });
});