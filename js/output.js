window.onload = function () {
  const basic = document.querySelector('.basic_btn');
  const detail = document.querySelector('.detail_btn');
  const p_basic = document.querySelector('.p_basic');
  const p_detail = document.querySelector('.p_detail');
  
  var basic_cnt = 0;
  var detail_cnt = 0;

  var basic_click = function () {
    basic_cnt += 1;
    var HIDE_CLASS = 'hide';
    var VISIBLE_CLASS = 'visible';
    if (basic_cnt % 2 === 1) {
      p_basic.classList.remove(VISIBLE_CLASS);
      const hasHideClass = p_basic.classList.contains(HIDE_CLASS);
      if (!hasHideClass) {
        basic.style.borderRadius = '1em';
        p_basic.classList.add(HIDE_CLASS);
      }
    } else {
      p_basic.classList.remove(HIDE_CLASS);
      const hasVisibleClass = p_basic.classList.contains(VISIBLE_CLASS);
      if (!hasVisibleClass) {
        basic.style.borderBottomRightRadius = 0;
        p_basic.classList.add(VISIBLE_CLASS);
      }
    }
  };

  var detail_click = function () {
    detail_cnt += 1;
    var HIDE_CLASS = 'hide';
    var VISIBLE_CLASS = 'visible';
    if (detail_cnt % 2 === 1) {
      p_detail.classList.remove(VISIBLE_CLASS);
      const hasHideClass = p_detail.classList.contains(HIDE_CLASS);
      if (!hasHideClass) {
        detail.style.borderRadius = '1em';
        p_detail.classList.add(HIDE_CLASS);
      }
    } else {
      p_detail.classList.remove(HIDE_CLASS);
      const hasVisibleClass = p_detail.classList.contains(VISIBLE_CLASS);
      if (!hasVisibleClass) {
        detail.style.borderBottomRightRadius = 0;
        p_detail.classList.add(VISIBLE_CLASS);
      }
    }
  };


  basic.addEventListener('click', basic_click);
  detail.addEventListener('click', detail_click);
}

