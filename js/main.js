(function() {
  'use strict';
  let arrowTop = document.querySelector('.footer__arrow-top');

      arrowTop.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

    window.addEventListener('scroll', function() {
      arrowTop.hidden = (pageYOffset < 190);
    });

  let input = document.getElementById('search');
	
	input.onfocus = function() {
		let icon = document.getElementById('icon');
		icon.classList.remove('show-search-bg');
		icon.classList.add('hide-search-bg');
	}
	input.onblur = function() {
		let icon = document.getElementById('icon');
		icon.classList.add('show-search-bg');
		icon.classList.remove('hide-search-bg');
	}

 const iconMenu = document.querySelector('.menu-icon');
 if (iconMenu) {
 	const menu = document.querySelector('.menu');
 	iconMenu.addEventListener('click', function(e) {
 		document.body.classList.toggle('lock'); // чтобы впоследствее запретить скролл страницы
 		iconMenu.classList.toggle('active');
 		menu.classList.toggle('active');
 	})
 }

 const iconSearch = document.querySelector('.fa-search');
 if (iconSearch) {
 	const searchForm = document.querySelector('.search');
 	document.addEventListener('click', function(e) {
 		if (e.target.classList.contains('fa-search')) {
 			searchForm.classList.toggle('active');
 		} else if (!e.target.classList.contains('search-mob')){
 			searchForm.classList.remove('active');
 		}
 	})
 }

})();