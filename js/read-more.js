document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les boutons "Read More"
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            const shortText = document.getElementById(`short-text-${id}`);
            const fullText = document.getElementById(`full-text-${id}`);

            // Basculer entre les textes
            if (shortText.classList.contains("d-none")) {
                shortText.classList.remove("d-none");
                fullText.classList.add("d-none");
                button.textContent = "Read More";
            } else {
                shortText.classList.add("d-none");
                fullText.classList.remove("d-none");
                button.textContent = "Read Less";
            }
        });
    });
});
