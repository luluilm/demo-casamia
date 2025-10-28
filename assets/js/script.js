// ===== 1️⃣ SIMPAN DAN TERAPKAN ZOOM SELURUH WEBSITE =====
document.addEventListener("wheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    let currentZoom = parseFloat(localStorage.getItem("siteZoom")) || 1;
    currentZoom += e.deltaY * -0.001;
    currentZoom = Math.min(Math.max(0.5, currentZoom), 2); // batas zoom 50%–200%
    document.body.style.zoom = currentZoom;
    localStorage.setItem("siteZoom", currentZoom);
  }
}, { passive: false });

window.addEventListener("load", function() {
  let savedZoom = parseFloat(localStorage.getItem("siteZoom")) || 1;
  document.body.style.zoom = savedZoom;
});

// ===== 2️⃣ SIMPAN DAN BUKA HALAMAN TERAKHIR =====
window.addEventListener("beforeunload", function() {
  localStorage.setItem("lastPage", window.location.pathname);
});

window.addEventListener("DOMContentLoaded", function() {
  const lastPage = localStorage.getItem("lastPage");
  if (lastPage && window.location.pathname.endsWith("index.html")) {
    if (lastPage !== "/index.html") {
      window.location.href = lastPage;
    }
  }
});
