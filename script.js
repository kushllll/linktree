window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const container = document.querySelector(".container");

  setTimeout(() => {
    loader.style.display = "none";
    container.classList.remove("hidden");
  }, 700);
});

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
