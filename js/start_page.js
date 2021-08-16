window.onload = function () {
  img_rotate();
};

const img = document.querySelector(".lab_img");
const QR_button = document.querySelector(".QR_button");

var img_rotate = function () {
  var ROTATE_CLASS = "rotate";
  const hasRotateClass = img.classList.contains(ROTATE_CLASS);
  if (!hasRotateClass) {
    img.classList.add(ROTATE_CLASS);
    setTimeout(function () {
      img.classList.remove(ROTATE_CLASS);
    }, 1300);
  }
};

var go_QR = function () {
  var CLICK_CLASS = "click";
  const hasClickClass = QR_button.classList.contains(CLICK_CLASS);
  if (!hasClickClass) {
    QR_button.classList.add(CLICK_CLASS);
  }
  setTimeout(function () {
    QR_button.classList.remove(CLICK_CLASS);
    window.location.href = "../qrcode.html";
  }, 1000);
};
img.addEventListener("click", img_rotate);
QR_button.addEventListener("click", go_QR);
