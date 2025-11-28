// Smooth scrolling only works for single-page anchors
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({behavior: 'smooth'});
    }
  });
});
