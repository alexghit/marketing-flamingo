const base = "https://cdn.jsdelivr.net/gh/AlexGhit/marketing-flamingo";

// Load JS
function loadJS(file) {
  const s = document.createElement("script");
  s.src = `${base}/src/${file}`;
  s.defer = true;
  document.body.appendChild(s);
}

// Load CSS
function loadCSS(file) {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = `${base}/src/${file}`;
  document.head.appendChild(l);
}

// CSS first
loadCSS("btn-animate.css");

// Load libraries BEFORE custom scripts
loadJS("libs/gsap.min.js");
loadJS("libs/CustomEase.min.js");
loadJS("libs/SplitText.min.js");

// Load animations
loadJS("btn-animate.js");

// Load other scripts
loadJS("lang-switch.js");
