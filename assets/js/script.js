(function() {
   // Hamburger Menu
   const hamburger = document.querySelector("#hamburger");
   const navMenu = document.querySelector(".navigation");
   const navLink = document.querySelectorAll(".nav-link");
   const navBar = document.querySelector("nav");
   const mainDiv = document.querySelector(".main-container");
   const footer = document.querySelector("footer");

   // Open hamburger menu on click
   hamburger.addEventListener("click", openMenu);
   
   function openMenu() {
      hamburger.classList.add("active");
      navMenu.classList.add("active");
      navBar.classList.remove("blur");
      mainDiv.classList.add("filter");
      footer.classList.add("filter");
   }

   // Close hamburger menu on navLink click
   navLink.forEach((n) => n.addEventListener("click", closeMenu));
   hamburger.addEventListener("click", closeMenu);
   
   function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navBar.classList.add("blur");
      mainDiv.classList.remove("filter");
      footer.classList.remove("filter");
   }
})();
