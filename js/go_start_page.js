const home_button = document.querySelector('.home_button');

var go_start_page = function () {
    setTimeout(function () {
        location.href = 'start_page.html';
        console.log("HOME 버튼 클릭");
    }, 10)
};
home_button.addEventListener('click', go_start_page);