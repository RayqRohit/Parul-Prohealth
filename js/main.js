// Get the navbar element
const navbar = document.querySelector('nav');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Add 'scrolled' class if scrolled
        navbar.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class if at the top of the page
        navbar.classList.remove('scrolled');
    }
});


// accordian

document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const isOpen = accordionItem.classList.contains("open");

        // Close all accordions
        document.querySelectorAll(".accordion-item").forEach((item) => {
            item.classList.remove("open");
            item.querySelector(".accordion-content").style.display = "none";
        });

        // Toggle current accordion
        if (!isOpen) {
            accordionItem.classList.add("open");
            accordionItem.querySelector(".accordion-content").style.display = "block";
        }
    });
});
