window.onload = function () {
  var data = localStorage.getItem("QR_result");
  const input = document.getElementById("result");
  input.value = data;

    
  const no_button = document.querySelector("#reset");
  console.log(no_button);
    
  var go_start_page = function () {
    setTimeout(function () {
      location.href = 'start_page.html';
      console.log("아니오 버튼 클릭");
    }, 10)
  };
  no_button.addEventListener('click', go_start_page);
};


