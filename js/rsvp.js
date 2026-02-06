document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rsvp-form");
    const submitBtn = document.getElementById("rsvp-submit");
    const statusMsg = document.getElementById("rsvp-status");

    if (!form) return;

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyji0j13zVyMKbx_1aDv-yov7IJDJ8My8UJOEQ4uh6Od5_ELqGwY5x_1B4DqdQM-Xe0pQ/exec";

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
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

            form.reset();
            statusMsg.textContent = "Thank you! Your RSVP has been received.";
            statusMsg.classList.add("text-green-700");
        } catch {
            statusMsg.textContent = "Something went wrong. Please try again.";
            statusMsg.classList.add("text-red-700");
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send RSVP";
        }
    });
});
