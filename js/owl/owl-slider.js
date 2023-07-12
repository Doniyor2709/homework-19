$(document).ready(function () {
	const slider = $('#slider').owlCarousel({
		nav: false,
		dots: true,
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 450,
		touchDrag: true,
		mouseDrag: false,
		center: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	})
})

