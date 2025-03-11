// Function to save checkbox state to Session Storage
function saveCheckboxState() {
  const checkbox = document.querySelector('input[type="checkbox"]');

  // Check if the checkbox exists
  if (checkbox) {
      sessionStorage.setItem(checkbox.id, checkbox.checked);
  } else {
    console.error("Checkbox not found!");
  }
}

// Function to load checkbox state from Session Storage
function loadCheckboxState() {
  const checkbox = document.querySelector('input[type="checkbox"]');

  // Check if the checkbox exists
  if (checkbox) {
    const savedState = sessionStorage.getItem(checkbox.id);
    checkbox.checked = savedState === 'true';
  } else {
    console.error("Checkbox not found!");
  }

  // Add or remove dark mode depending on checkbox
  const savedState = sessionStorage.getItem(checkbox.id);
  const body = document.querySelector("body");
  const freelanceContainer = document.querySelector(".freelance");
  const image1 = "assets/images/3189802.jpg";
  const image2 = "assets/images/3189802-dark.jpg";
  
  if (savedState === 'true') {
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
}

// Ensure the checkbox has an ID (crucial for storage)
function ensureCheckboxHasId(){
  const checkbox = document.querySelector('input[type="checkbox"]');
  if (checkbox && !checkbox.id) {
      checkbox.id = 'myCheckbox'; // Or any unique ID you prefer
      console.warn("Added default id to checkbox, ensure to add one in your HTML")
  }
}

// Attach event listener to the checkbox to save its state
document.addEventListener("DOMContentLoaded", () => {
    ensureCheckboxHasId();
    const checkbox = document.querySelector('input[type="checkbox"]');

  // Check if the checkbox exists
  if(checkbox){
    checkbox.addEventListener('change', saveCheckboxState);
  } else {
    console.error("Checkbox not found to add a listener!");
  }

});

// Load checkbox state on page load
document.addEventListener('DOMContentLoaded', loadCheckboxState);