(function() {
   // Form Functionality
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
})();