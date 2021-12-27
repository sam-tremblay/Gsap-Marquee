$(window).on('load', function(){
	marquee();
});

function marquee(){

	const marquee = $('.marquee');


	/*
	* On start, for each Marquee element, duplicate last group of Items
	*/
	marquee.each(function(){
		$(this).find('.track .items:last-child')
		.clone()
		.appendTo($(this).find('.track'));


		/*
		* Ok, now marquee is duplicated, start "translating-x" his track
		*/
		setInterval(() => {
			gsap.to($(this).find('.track'), 1, {
				x: '-=100px',
				ease: 'none',
				onUpdate: () =>{

					/*
					* Duplicate last group of items when touch the end of screen
					*/
					const current_screen_width = $(window).width(),
						  last_child = $(this).find('.track .items:last-child').offset().left + $(this).find('.track .items:last-child').width();

					if(last_child <= current_screen_width){
						$(this).find('.track .items:last-child')
						.clone()
						.appendTo($(this).find('.track'));
					}
					
				}
			})
		}, 1000);
	});
}