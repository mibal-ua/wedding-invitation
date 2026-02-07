document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rsvp-form");
    const submitBtn = document.getElementById("rsvp-submit");
    const statusMsg = document.getElementById("rsvp-status");

    // Modal elements
    const modal = document.getElementById("rsvp-modal");
    const backdrop = document.getElementById("rsvp-modal-backdrop");
    const content = document.getElementById("rsvp-modal-content");
    const icon = document.getElementById("rsvp-modal-icon");
    const title = document.getElementById("rsvp-modal-title");
    const divider = document.getElementById("rsvp-modal-divider");
    const message = document.getElementById("rsvp-modal-message");
    const submessage = document.getElementById("rsvp-modal-submessage");
    const sparkles = document.getElementById("rsvp-modal-sparkles");
    const closeBtn = document.getElementById("rsvp-modal-close");

    if (!form) return;

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyji0j13zVyMKbx_1aDv-yov7IJDJ8My8UJOEQ4uh6Od5_ELqGwY5x_1B4DqdQM-Xe0pQ/exec";

    function openModal() {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";

        // Trigger animations on next frame
        requestAnimationFrame(() => {
            backdrop.classList.remove("opacity-0");
            content.classList.remove("scale-90", "opacity-0");
            content.classList.add("scale-100", "opacity-100");
            icon.classList.remove("opacity-0", "scale-50");
            icon.classList.add("opacity-100", "scale-100");
            title.classList.remove("opacity-0", "translate-y-4");
            divider.classList.remove("opacity-0", "scale-x-0");
            divider.classList.add("opacity-50", "scale-x-100");
            message.classList.remove("opacity-0", "translate-y-4");
            submessage.classList.remove("opacity-0", "translate-y-4");
            sparkles.classList.remove("opacity-0");
        });
    }

    function closeModal() {
        backdrop.classList.add("opacity-0");
        content.classList.add("scale-90", "opacity-0");
        content.classList.remove("scale-100", "opacity-100");

        setTimeout(() => {
            modal.classList.add("hidden");
            document.body.style.overflow = "";
            // Reset all animations for next time
            icon.classList.add("opacity-0", "scale-50");
            icon.classList.remove("opacity-100", "scale-100");
            title.classList.add("opacity-0", "translate-y-4");
            divider.classList.add("opacity-0", "scale-x-0");
            divider.classList.remove("opacity-50", "scale-x-100");
            message.classList.add("opacity-0", "translate-y-4");
            submessage.classList.add("opacity-0", "translate-y-4");
            sparkles.classList.add("opacity-0");
        }, 500);
    }

    // Close modal on button click, backdrop click, or Escape key
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    const btnText = document.getElementById("rsvp-btn-text");
    const btnIcon = document.getElementById("rsvp-btn-icon");
    const flyingPlane = document.getElementById("rsvp-flying-plane");

    function launchPlane() {
        flyingPlane.classList.remove("opacity-0");
        flyingPlane.classList.add("fly-animation");

        flyingPlane.addEventListener("animationend", () => {
            flyingPlane.classList.add("opacity-0");
            flyingPlane.classList.remove("fly-animation");
        }, { once: true });
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        btnText.textContent = "Надсилаємо...";
        btnIcon.classList.add("animate-bounce");
        statusMsg.textContent = "";
        statusMsg.className = "text-center mt-4 font-body text-sm";

        const data = {
            name: form.querySelector('[name="name"]').value.trim(),
            email: form.querySelector('[name="email"]').value.trim(),
            attendance: form.querySelector('[name="attendance"]').value,
            guests: form.querySelector('[name="guests"]').value,
            message: form.querySelector('[name="message"]').value.trim(),
        };

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            // Launch the flying plane animation
            launchPlane();

            // Wait for the plane to fly before showing modal
            setTimeout(() => {
                form.reset();
                openModal();
            }, 800);
        } catch {
            statusMsg.textContent = "Щось пішло не так. Спробуйте ще раз.";
            statusMsg.classList.add("text-red-700");
        } finally {
            submitBtn.disabled = false;
            btnText.textContent = "Надіслати відповідь";
            btnIcon.classList.remove("animate-bounce");
        }
    });
});
