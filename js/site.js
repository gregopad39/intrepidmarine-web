(function () {
  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-shot]").forEach(function (img) {
    var frame = img.closest(".shot-frame") || img.closest(".hero-stage");
    function missing() {
      if (frame && frame.classList) frame.classList.add("awaiting-shot");
    }
    img.addEventListener("error", missing);
    if (img.complete && img.naturalWidth === 0) missing();
  });

  document.querySelectorAll("video[data-optional-video]").forEach(function (video) {
    var stage = video.closest(".hero-stage");
    video.addEventListener("loadeddata", function () {
      if (video.readyState >= 2 && stage) stage.classList.add("has-video");
    });
    video.addEventListener("error", function () {
      video.style.display = "none";
    });
  });
})();
