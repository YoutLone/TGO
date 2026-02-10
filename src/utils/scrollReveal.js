export function setupScrollReveal(root = document) {
  if (!root) return () => {};

  const elements = Array.from(
    root.querySelectorAll(".reveal, .reveal-soft")
  );

  if (elements.length === 0) return () => {};

  if (typeof IntersectionObserver === "undefined") {
    elements.forEach((el) => el.classList.add("in-view"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const observeAll = () => {
    elements.forEach((el) => {
      if (el.dataset.revealObserved === "true") return;
      el.dataset.revealObserved = "true";
      observer.observe(el);
    });
  };

  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(observeAll);
  } else {
    observeAll();
  }

  return () => observer.disconnect();
}
