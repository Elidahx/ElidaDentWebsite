// Modal Popup Functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Form Validation - Contact Form
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }
    return true;
}

// Toggle active class for menu links
const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        menuLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Smooth Scroll on anchor click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Open product modal
document.querySelectorAll(".product-detail-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const productDetails = this.getAttribute("data-product-details");
        document.getElementById("productDetails").textContent = productDetails;
        openModal('productModal');
    });
});
