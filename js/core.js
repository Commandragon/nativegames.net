// Hey skid or contributor.
// this is The core script that sets the theme, favicon, tabcloak etc

var googleAnaIn = document.createElement("script");
googleAnaIn.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-W8NZMM8WN9');
`;
document.body.appendChild(googleAnaIn);

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  return (event.returnValue = "");
});

// Fetch the JSON configuration from the URL
fetch("https://gist.githubusercontent.com/3kh0/6dd52e0bc4cf407769e89ea2d5957d49/raw/config.json?time=" + Date.now())
  .then((response) => response.json())
  .then((config) => {
    // Use the obtained values to set the id attributes
    var googleAna = document.createElement("script");
    googleAna.async = true;
    googleAna.src = "https://www.googletagmanager.com/gtag/js?id=" + config.googleAna;
    document.body.appendChild(googleAna);

    var googleAds = document.createElement("script");
    googleAds.async = true;
    googleAds.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + config.adsenseID;
    document.body.appendChild(googleAds);
  });

var rocket = document.createElement("script");
rocket.async = true;
rocket.src = "/js/rocket-loader.min.js";
document.body.appendChild(rocket);



  // Apply selected theme
  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });

  function applyTheme(theme) {
    document.body.className = ""; // Reset body classes
    if (theme !== "default") {
      document.body.classList.add(theme);
    }
  }
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function createBlank() {
  win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = location.origin;
  win.document.body.appendChild(iframe);
  window.location.href = "https://www.google.com/search?q=what+day+is+today"
}
createBlank();
