const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const revealTargets = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 }
  );

  for (const target of revealTargets) {
    target.style.opacity = "0";
    target.style.transform = "translateY(18px)";
    target.style.transition = "opacity 620ms ease, transform 620ms ease";
    observer.observe(target);
  }

  const style = document.createElement("style");
  style.textContent = "[data-reveal].is-visible{opacity:1!important;transform:translateY(0)!important}";
  document.head.append(style);
}

