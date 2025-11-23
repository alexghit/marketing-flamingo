// Build animated characters
function initBtnStagger() {
const step = 0.01;

document.querySelectorAll('[data-btn]').forEach(wrap => {
  const el = wrap.querySelector('[data-btn-text]');
  if (!el || el.dataset.btnInit) return;

  const cs = getComputedStyle(el);
  if (cs.display === 'inline') el.style.display = 'inline-block';
  el.style.overflow = 'hidden';

  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';

  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.transitionDelay = i * step + 's';
    if (ch === ' ') span.style.whiteSpace = 'pre';
    el.appendChild(span);
  });

  el.dataset.btnInit = '1';
});
}

// Run immediately (your script loads after DOM)
initBtnStagger();
