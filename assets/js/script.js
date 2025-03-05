(function() {
   // Form functionality
   const scriptURL = "https://api.web3forms.com/submit";
   const form = document.querySelector("form");
   const submitBtn = document.querySelector("#submit-btn");
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.value = "Loading...";
      var formData = new FormData(form);
      
   // Send form submissions to Web3Forms
   fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
         Swal.fire("Done", "Submitted Successfully.", "success");
         form.reset();
      })
      .catch((error) => {
         Swal.fire("Error", "Something went wrong. Please try again!", "error");
      });
      submitBtn.disabled = false;
      submitBtn.value = "Submit";
   });
   
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
