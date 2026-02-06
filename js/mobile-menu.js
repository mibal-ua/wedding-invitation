document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    // Close menu when a link is clicked
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
        });
    });
});
