
// Function to load any HTML component
function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error loading component:", err));
}

// Load Navbar and Footer
loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");










