// Indicate the current section without changing the browser's URL on scroll.
const navigationLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const sections = navigationLinks
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const visibleSections = new Map();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) visibleSections.set(entry.target.id, entry);
    const current = [...visibleSections.values()]
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    for (const link of navigationLinks) {
      if (current && link.hash === `#${current.target.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-5% 0px -30% 0px', threshold: 0 });

  for (const section of sections) observer.observe(section);
}
