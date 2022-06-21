//	==================
//	=  Header Links  =
//	==================
// Dispaly And Hide The header Links.

const openingButton = document.getElementById("opening-btn-js");
const closingButton = document.getElementById("closing-btn-js");
const headerLinks   = document.getElementById("header-links-js");

openingButton.addEventListener("click", ()=>{
  headerLinks.classList.add("header__links--active");
});

closingButton.addEventListener("click", ()=>{
  headerLinks.classList.remove("header__links--active")
});

document.querySelectorAll(".header__links__link").forEach(link =>{
  link.addEventListener("click", () =>{
    headerLinks.classList.remove("header__links--active");
  });
});

//      ===================
//      =  Scroll To Top  =
//      ===================
const scrollButton = document.getElementById("scroll-up");

addEventListener("scroll", () =>{
  if(window.scrollY > 900){
    scrollButton.classList.add("scroll-up--acitve");
  }else{
    scrollButton.classList.remove("scroll-up--acitve");
  }
});

scrollButton.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});