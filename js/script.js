const images = document.querySelectorAll(".srv-n-adv__item img");
const autoImages = document.querySelectorAll(".section--expert__list img");

const io = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const image = entry.target;
            const src = image.dataset.lazy;
            image.src = src;

            image.classList.add("appear");
            observer.unobserve(image);
        }
    })
})
images.forEach(image => io.observe(image));
autoImages.forEach(image => io.observe(image));


//smooth scroll

const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const goToBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
//BURGER MENU AND SCROLL LOCK

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header--nav__site');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('_lock');

})


const Links = document.querySelectorAll('.nav-list-item[data-goto]');

if(Links.length > 0){
	Links.forEach(menuLink => {
		menuLink.addEventListener("click", function() {
			menuBtn.classList.remove('active');
			menu.classList.remove('active');
			document.body.classList.remove('_lock');
		})
	})
}