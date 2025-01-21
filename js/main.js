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


// sidebar

// JavaScript to toggle the sidebar
// function toggleSideNav() {
//     const sideNav = document.getElementById('sideNav');
//     sideNav.classList.toggle('active');
// }



// Get the elements
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

// Toggle the sidebar and overlay visibility when clicking the toggle button
toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('active');  // Show sidebar
  overlay.classList.add('active');  // Show overlay
});

// Close the sidebar and overlay when clicking the close button
closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');  // Hide sidebar
  overlay.classList.remove('active');  // Hide overlay
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
