document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const animatedSections = document.querySelectorAll(".section-animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedSections.forEach(section => {
  observer.observe(section);
});

const playButton = document.getElementById("playBtn");

playButton.addEventListener("click", () => {
  alert("Add your Merch Mania tutorial video here.");
});