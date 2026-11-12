document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  body.addEventListener("click", (event) => {
    const heart = document.createElement("span");
    heart.textContent = "❤";
    heart.className = "click-heart";
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    heart.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 120}px`);
    heart.style.setProperty("--drift-y", `${-40 - Math.random() * 80}px`);

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);
  });
});
