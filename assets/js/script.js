(function() {
   document.addEventListener("DOMContentLoaded", () => {
      // get the current year
      const currentYear = new Date().getFullYear();
      // target elements with the "data-year" attribute
      const currentYearSpans = document.querySelectorAll(".data-year");
      // update each element with the current year
      currentYearSpans.forEach(element => {
         element.textContent = currentYear;
      });
   });

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
   function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navBar.classList.add("blur");
      mainDiv.classList.remove("filter");
      footer.classList.remove("filter");
   }

   const body = document.querySelector("body");
   const checkbox = document.querySelector("#checkbox");
   const freelanceContainer = document.querySelector(".freelance");
   const image1 = "assets/images/3189802.jpg";
   const image2 = "assets/images/3189802-dark.jpg";
   
   // Switch to dark mode
   checkbox.addEventListener("change", () => {
      if(checkbox.checked) {
         body.classList.add("dark");
         if (freelanceContainer) {
            freelanceContainer.src = image2;
         }
      } else {
         body.classList.remove("dark");
         if (freelanceContainer) {
            freelanceContainer.src = image1;
         }
      }
   })
})();