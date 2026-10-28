const celebrateButton = document.getElementById("celebrate-button");
const celebrationMessage = document.getElementById("celebration-message");
const confettiColors = ["#d34f82", "#efb64d", "#8c78d8", "#72c9b0", "#f28a70"];

celebrateButton.addEventListener("click", () => {
    celebrationMessage.textContent = "Niech spełnią się wszystkie Twoje marzenia! 🎉";

    for (let index = 0; index < 90; index += 1) {
        const confetti = document.createElement("span");
        confetti.className = "confetti";
        confetti.setAttribute("aria-hidden", "true");
        confetti.style.setProperty("--start", `${Math.random() * 100}vw`);
        confetti.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
        confetti.style.setProperty("--duration", `${2 + Math.random() * 2}s`);
        confetti.style.setProperty(
            "--color",
            confettiColors[Math.floor(Math.random() * confettiColors.length)]
        );
        document.body.appendChild(confetti);

        confetti.addEventListener("animationend", () => confetti.remove(), { once: true });
    }
});
