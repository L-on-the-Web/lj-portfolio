(function() {
   // Hamburger Menu
   const hamburger = document.querySelector("#hamburger");
   const navMenu = document.querySelector(".navigation");
   const navLink = document.querySelectorAll(".nav-link");
   const navBar = document.querySelector("nav");
   const body = document.querySelector("body");
   const mainDiv = document.querySelector(".main-container");
   const footer = document.querySelector("footer");

   // Open hamburger menu on click
   hamburger.addEventListener("click", openMenu);
   
   function openMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      mainDiv.classList.toggle("filter");
      footer.classList.toggle("filter");
      navBar.classList.toggle("blur");
   }

   // Close hamburger menu on navLink click
   navLink.forEach((n) => n.addEventListener("click", closeMenu));
   
   function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      //navBar.style.setProperty("backdrop-filter", "blur(5px)");
   }
})();