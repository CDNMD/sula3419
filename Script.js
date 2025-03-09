document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".cyber-btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 0 30px var(--neon-pink)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "0 0 15px rgba(0, 243, 255, 0.3)";
        });

        button.addEventListener("click", () => {
            button.classList.add("clicked");
            setTimeout(() => button.classList.remove("clicked"), 200);
        });
    });
});
