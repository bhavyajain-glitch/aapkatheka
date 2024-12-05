let currentSection = 0;

document.addEventListener("wheel", (event) => {
  const sections = document.querySelectorAll(".section");
  if (event.deltaY > 0) {
    // Scrolling down
    currentSection = Math.min(currentSection + 1, sections.length - 1);
  } else {
    // Scrolling up
    currentSection = Math.max(currentSection - 1, 0);
  }
  sections[currentSection].scrollIntoView({
    behavior: "smooth"
  });
});
