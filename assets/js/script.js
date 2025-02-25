//FORM FUNCTIONALITY
(function() {
   const form = document.querySelector("form");
   const inputs = document.querySelectorAll("input");
   const textarea = document.querySelector("textarea");
   
   const hamburger = document.querySelector("#hamburger");
   const navMenu = document.querySelector(".navigation");
   const navLink = document.querySelectorAll(".nav-link");
   const navBar = document.querySelector("nav");
   
   const body = document.querySelector("body");
   
   //HAMBURGER MENU
   hamburger.addEventListener("click", openMenu);

   function openMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      body.classList.toggle("blur");
      navBar.classList.toggle("blurred");
   }

   // Close hamburger on navLink click
   navLink.forEach((n) => n.addEventListener("click", closeMenu));
   
   function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navBar.style.setProperty("backdrop-filter", "blur(5px)");
   }
})();