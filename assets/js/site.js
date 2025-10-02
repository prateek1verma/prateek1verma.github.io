function toggleNav(){
  const el = document.getElementById('site-nav');
  if(!el) return;
  const shown = getComputedStyle(el).display !== 'none';
  el.style.display = shown ? 'none' : 'flex';
}
// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});
