const floatingObject = document.querySelector('.floating-object');

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Update position based on scroll
  const newTop = 10 + (scrollY / windowHeight) * 50; // Change '50' to adjust the sensitivity
  const newLeft = 10 + (scrollY / windowHeight) * 30; // Change '30' to adjust the sensitivity

  // Update the object's position
  floatingObject.style.top = `${Math.min(newTop, 80)}%`; // Cap at 80% to avoid it going too far
  floatingObject.style.left = `${Math.min(newLeft, 80)}%`;
});
