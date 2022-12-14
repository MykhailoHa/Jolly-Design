'use strict';
/* document.querySelector(".burger-menu").addEventListener("click", classAddFunction);
function classAddFunction() {
   const open = document.querySelector(".mobile-wrapper");
   open.classList.add("open");
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const close = document.querySelector(".mobile-wrapper.open");
    close.classList.remove("open");
  }
}) */

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.burger-menu')) {
    document.documentElement.classList.toggle('open');
  }
}

;
//# sourceMappingURL=app.js.map
