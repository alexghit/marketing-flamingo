const base = "https://cdn.jsdelivr.net/gh/alexghit/marketing-flamingo/src/";

// Load JS file
function loadJS(file) {
  const s = document.createElement("script");
  s.src = base + file;
  s.defer = true;
  document.body.appendChild(s);
}

// Add your JS files here
const files = [
  "lang-switch.js",
  "btn-animate.js",
  // "file3.js",
  // "file4.js"
];

// Load them
files.forEach(loadJS);
