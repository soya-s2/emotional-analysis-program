window.onload = function () {
  img_rotate();
}

const img = document.querySelector('.lab_img');
const QR_button = document.querySelector('.QR_button');

var img_rotate = function () {
  var ROTATE_CLASS = 'rotate';
  
  const hasRotateClass = img.classList.contains(ROTATE_CLASS);
  if (!hasRotateClass) {
    img.classList.add(ROTATE_CLASS);
    setTimeout(function () {
      img.classList.remove(ROTATE_CLASS);
    }, 1300);
  } 
};

var go_QR = function () {
  setTimeout(function () {
    window.location.href = '../qrcode.html';
  }, 1000);
}
img.addEventListener('click', img_rotate);
QR_button.addEventListener('click', go_QR);

