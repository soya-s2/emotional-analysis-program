window.onload = function () {
  var data = localStorage.getItem("QR_result");
  const input = document.getElementById("result");
  input.value = data;

    
  const no_button = document.querySelector("#reset");
  const yes_button = document.querySelector("#submit");
    
  var go_start_page = function () {
    setTimeout(function () {
      location.href = 'start_page.html';
      console.log("아니오 버튼 클릭");
      var CLICK_CLASS = 'click';
    
    const hasClickClass = no_button.classList.contains(CLICK_CLASS);
    if (!hasClickClass) {
      no_button.classList.add(CLICK_CLASS);
    }
    setTimeout(function () {
      no_button.classList.remove(CLICK_CLASS);
    }, 3000);
    }, 10)
  };
  no_button.addEventListener('click', go_start_page);

  var click_submit = function () {
    var CLICK_CLASS = 'click';
    
    const hasClickClass = yes_button.classList.contains(CLICK_CLASS);
    if (!hasClickClass) {
      yes_button.classList.add(CLICK_CLASS);
    }
    setTimeout(function () {
      yes_button.classList.remove(CLICK_CLASS);
    }, 3000);
  };
  
  yes_button.addEventListener('click', click_submit);
};



