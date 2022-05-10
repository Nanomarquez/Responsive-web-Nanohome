/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const color = "#000"
    const header = document.getElementById("header")
    if(this.scrollY >= 680) header.classList.add("scroll-header")
    if(this.scrollY<=680) header.classList.remove("scroll-header")
}
window.addEventListener("scroll",scrollHeader)
/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container",{
    spaceBetween:32,
    grabCursor:true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item")

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector(".value__accordion-header")

    accordionHeader.addEventListener("click",()=>{
        const openItem = document.querySelector(".accordion-open")

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector(".value__accordion-content")

    if(item.classList.contains("accordion-open")){
        accordionContent.removeAttribute("style")
        item.classList.remove("accordion-open")
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + "px"
        item.classList.add("accordion-open")
    }
}

let animado = document.querySelectorAll(".contact__card");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0;i<animado.length;i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado-250<scrollTop){
            animado[i].style.opacity = 1
        }
    }
}



window.addEventListener("scroll",mostrarScroll);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute("id")

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
                }else{
                    document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
                }
             })
    }
window.addEventListener("scroll",scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll",scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun"

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(IconTheme) ? "bx bx-moon" : "bx bx-sun"

if(selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click" , ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem("selected-theme",getCurrentTheme())
    localStorage.setItem("selected-icon",getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration:2500,
    delay:400,
    reset: false
})

sr.reveal(".home__title, .popular__container, .subscribe__container, .footer__container")
sr.reveal(".home__description, .footer__info",{delay:100})
sr.reveal(".home__search",{delay:200})
sr.reveal(".home__value", {delay:300})
sr.reveal(".home__images",{delay:400, origin:"bottom"})
sr.reveal(".logos__img" ,{interval:50})
sr.reveal(".value__images, .contact__content",{origin:"left"})
sr.reveal(".value__content, .contact__images",{origin:"right"})