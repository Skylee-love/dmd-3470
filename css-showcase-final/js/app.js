const snapContainer = document.getElementById("snapContainer");
    const progressBar = document.getElementById("progressBar");

    function updateProgress() {
      const scrollTop = snapContainer.scrollTop;
      const scrollHeight = snapContainer.scrollHeight - snapContainer.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + "%";
    }

    snapContainer.addEventListener("scroll", updateProgress);

    // Fade-in sections when they enter view
    const sections = document.querySelectorAll(".snap-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        root: snapContainer,
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

   
   