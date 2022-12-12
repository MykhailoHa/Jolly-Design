'use strict';

document.querySelector(".burger-menu").addEventListener("click", classAddFunction);

function classAddFunction() {
  const open = document.querySelector(".mobile-wrapper");
  open.classList.add("open");
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const close = document.querySelector(".mobile-wrapper.open");
    close.classList.remove("open");
  }
});
//# sourceMappingURL=app.js.map
