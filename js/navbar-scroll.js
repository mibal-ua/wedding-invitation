document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("home");

    if (!navbar || !hero) return;

    function onScroll() {
        const heroBottom = hero.offsetHeight;
        const scrolled = window.scrollY > heroBottom - 80;

        if (scrolled) {
            navbar.classList.add("bg-wedding-creme", "shadow-sm");
            navbar.classList.remove("bg-transparent");
            navbar.querySelectorAll(".nav-link").forEach((el) => {
                el.classList.remove("text-white", "drop-shadow-md");
                el.classList.add("text-wedding-brown-light");
            });
            navbar.querySelectorAll(".nav-brand").forEach((el) => {
                el.classList.remove("text-white", "drop-shadow-md");
                el.classList.add("text-wedding-brown");
            });
        } else {
            navbar.classList.remove("bg-wedding-creme", "shadow-sm");
            navbar.classList.add("bg-transparent");
            navbar.querySelectorAll(".nav-link").forEach((el) => {
                el.classList.add("text-white", "drop-shadow-md");
                el.classList.remove("text-wedding-brown-light");
            });
            navbar.querySelectorAll(".nav-brand").forEach((el) => {
                el.classList.add("text-white", "drop-shadow-md");
                el.classList.remove("text-wedding-brown");
            });
        }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});
