/* Tiny enhancements only — site is static and works without JS. */
(function () {
  var y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());
})();
