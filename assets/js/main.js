/*
	TXT by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});

	// Scrolly
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height() - 5; }
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);



//My Edites //
reg_bt = document.getElementById("sign-up-btn");
if (reg_bt){
reg_bt.addEventListener('click', function() {
	window.location.href = 'sing_up.html';
})};

reg_bt = document.getElementById("sign-up-btn-2");
if (reg_bt){
reg_bt.addEventListener('click', function() {
	window.location.href = 'sing_up.html';
})};


//Icons logos//
icon_logos = document.getElementsByClassName("icon_logo");
icon_par = document.getElementById("icon_p");
if	(icon_logos){
	for (var i = 0; i < icon_logos.length; i++) {
		icon_logos[i].addEventListener('mouseover', function() {
			if (this==icon_logos[0]){
				icon_par.innerHTML = 'مساعدة المرضى لإيجاد المستشفى المناسب';
			}
			else if (this==icon_logos[1]){
				icon_par.innerHTML = 'مساعدة المرضى لإيجاد سكن قريب لمكان العلاج';
			}
			else if (this==icon_logos[2]){
				icon_par.innerHTML = 'خدمة مجانية تماماً';
			}
		});
	
		icon_logos[i].addEventListener('mouseleave', function(){
			icon_par.innerHTML = ''
		})
	}

};


const donateButton = document.getElementById('donate_btn');
const modalOverlay = document.getElementById('modalOverlay');
const donationModal = document.getElementById('donationModal');
const closeModal = document.getElementById('closeModal');