function updateRootPseudoClass() {
  const root = document.documentElement;
  const width = window.innerWidth;

  root.classList.remove('medium', 'small');

  if (width <= 576) {
    root.classList.add('small');
  } else if (width <= 768) {
    root.classList.add('medium');
  }
}

window.addEventListener('resize', updateRootPseudoClass);
window.addEventListener('DOMContentLoaded', updateRootPseudoClass);