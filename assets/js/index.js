/*=============== SWIPER TEAM ===============*/
const swiperTeam = new Swiper('.team__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickAble: true,
      },

  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)