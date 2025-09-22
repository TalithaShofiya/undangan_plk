document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("#opening, #profile, #event, #maps, #gallery, #rsvp, #thanks");

    const navLinks = document.querySelectorAll(".image-navbar .nav-link");

    function toggleNavbarVisibility() {
        const scrollTop = window.scrollY;
        if (scrollTop > 200) {
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
        }
    }

        function setActiveIcon() {
            let currentSection = null;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = section.id;
                }
            });

            navLinks.forEach((link) => {
                const img = link.querySelector("img");
                if (link.dataset.section === currentSection) {
                    link.classList.add("active");
                    img.src = img.dataset.iconActive;
                } else {
                    link.classList.remove("active");
                    img.src = img.dataset.icon;
                }
            });
        }

    window.addEventListener("scroll", setActiveIcon);
    window.addEventListener("load", setActiveIcon);
});