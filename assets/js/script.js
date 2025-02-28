(function() {
   // Form functionality
   const scriptURL = "https://script.google.com/macros/s/AKfycbwJlZ89AxFLXrWg4cee0-Q92qJ7th5q-V3W1qs0BUpjkSJtow6nlt8u8H78zTS_RWGaaA/exec";
   const form = document.forms["submit-to-google-sheet"];
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      var formData = new FormData(form);
   // Send form submissions to Google Sheet
   fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
         Swal.fire("Done", "Submitted Successfully.", "success");
      })
      .catch((error) => {
         Swal.fire("Error", "Something went wrong. Please try again!", "error");
      });
   });
   //const form = document.querySelector("form");
   //const inputs = document.querySelectorAll("input");
   //const textarea = document.querySelector("textarea");
   
   const hamburger = document.querySelector("#hamburger");
   const navMenu = document.querySelector(".navigation");
   const navLink = document.querySelectorAll(".nav-link");
   const navBar = document.querySelector("nav");
   const body = document.querySelector("body");
   
   // Open hamburger menu on click
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
