
document.querySelectorAll(".link-card").forEach(card => {
  card.addEventListener("click", () => {
    card.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.95)" },
        { transform: "scale(1)" }
      ],
      { duration: 180 }
    );
  });
});
