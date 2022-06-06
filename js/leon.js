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