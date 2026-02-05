// Dynamic Navbar on Scroll
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Active Link Highlight
    document.querySelectorAll("section").forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            links.forEach(link => link.classList.remove("active"));
            document.querySelector(`nav a[href="#${section.id}"]`)?.classList.add("active");
        }
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.querySelectorAll(".error").forEach(err => err.textContent = "");

    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        valid = false;
    }

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email.nextElementSibling.textContent = "Enter a valid email";
        valid = false;
    }

    if (message.value.trim() === "") {
        message.nextElementSibling.textContent = "Message cannot be empty";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        this.reset();
    }
});

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});
