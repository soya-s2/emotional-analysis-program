const recommended = [130, 60, 50, 2300, 1500, 50, 750, 3500, 300];
const click_cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const TRANS_CLASS = "trans";
const VISIBLE_CLASS = "visible";
var isDanger = [];
var temp = [];
var isTouch = false;
var basic_cnt = 0;
var detail_cnt = 0;
var review_cnt = 0;

window.onload = function () {
  window.scrollTo(0, 0);
  const body = document.querySelector("body");

  const main = document.querySelector(".main");

  const basic = document.querySelector(".basic_btn");
  const p_basic = document.querySelector(".p_basic");

  const detail = document.querySelector(".detail_btn");
  const p_detail = document.querySelector(".p_detail");

  const review = document.querySelector(".review_btn");
  const p_review = document.querySelector(".p_review");

  const ann_container = document.querySelector(".ann_container");

  const danger_visible = document.getElementsByClassName("danger");
  const click_visible = document.querySelector(".mouse");
  data = document.getElementsByTagName("p");

  const touch = function (event) {
    isTouch = true;
    click_visible.classList.remove("visible");
    click_visible.style.opacity = 0;

    main.style.opacity = 1;
    detail.style.opacity = 1;
    p_detail.style.opacity = 1;
    ann_container.style.opacity = 1;
    review.style.opacity = 1;
    body.removeEventListener("click", touch);
  };

  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if (
      scroll > basic.offsetTop - window.outerHeight / 1.6 &&
      isTouch === false
    ) {
      for (var i = 0; i < recommended.length; i++) {
        const parent = data[i].parentNode;
        const danger = 0.6;
        const warn = 0.4;
        // const normal = 0.03;
        const hasTransClass = parent.classList.contains(TRANS_CLASS);
        if (data[i].innerText > recommended[i] * danger) {
          parent.style.backgroundColor = "#bd0d00";
          danger_visible[i].classList.add(VISIBLE_CLASS);
          isDanger[i] = true;
          setTimeout(function () {
            setTimeout(function () {
              setTimeout(function () {
                setTimeout(function () {
                  parent.classList.add(TRANS_CLASS);
                  parent.style.backgroundColor = "#bd0d00";
                }, 800);
                parent.classList.remove(TRANS_CLASS);
                parent.style.backgroundColor = "black";
              }, 800);
              if (!hasTransClass) {
                parent.classList.add(TRANS_CLASS);
                parent.style.backgroundColor = "#bd0d00";
              }
            }, 800);
            parent.classList.remove(TRANS_CLASS);
            parent.style.backgroundColor = "black";
          }, 3000);
        } else if (data[i].innerText > recommended[i] * warn) {
          parent.style.backgroundColor = "#e6c715";
        } else {
          parent.style.backgroundColor = "#01590b";
        }
        if (!hasTransClass) {
          parent.classList.add(TRANS_CLASS);
        } else {
          parent.classList.remove(TRANS_CLASS);
        }
      }
      body.addEventListener("click", touch);
      main.style.opacity = 0.25;
      detail.style.opacity = 0.25;
      p_detail.style.opacity = 0.25;
      ann_container.style.opacity = 0.25;
      review.style.opacity = 0.25;
      click_visible.classList.add("visible");
      click_visible.style.opacity = 1;
      this.setTimeout(function () {
        setTimeout(function () {
          setTimeout(function () {
            setTimeout(function () {
              click_visible.classList.add("visible");
              click_visible.style.opacity = 1;
              if (isTouch === true) {
                click_visible.classList.remove("visible");
                click_visible.style.opacity = 0;
              }
            }, 350);
            click_visible.classList.remove("visible");
            click_visible.style.opacity = 0;
          }, 350);
          click_visible.classList.add("visible");
          click_visible.style.opacity = 1;
        }, 350);
        click_visible.classList.remove("visible");
        click_visible.style.opacity = 0;
      }, 350);
    } else if (
      scroll <= basic.offsetTop - window.outerHeight / 1.6 &&
      isTouch === false
    ) {
      main.style.opacity = 1;
      detail.style.opacity = 1;
      p_detail.style.opacity = 1;
      ann_container.style.opacity = 1;
      review.style.opacity = 1;
      click_visible.classList.remove("visible");
      click_visible.style.opacity = 0;
    } else if (isTouch === true) {
    }
  });

  for (var i = 0; i < recommended.length; i++) {
    data[i].addEventListener("click", danger_click);
  }

  var basic_click = function () {
    basic_cnt += 1;
    var HIDE_CLASS = "hide";
    var VISIBLE_CLASS = "visible";
    if (basic_cnt % 2 === 1) {
      p_basic.classList.remove(VISIBLE_CLASS);
      const hasHideClass = p_basic.classList.contains(HIDE_CLASS);
      if (!hasHideClass) {
        basic.style.borderRadius = "1em";
        basic.style.transition = "all ease 0.3s";
        p_basic.classList.add(HIDE_CLASS);
      }
    } else {
      p_basic.classList.remove(HIDE_CLASS);
      const hasVisibleClass = p_basic.classList.contains(VISIBLE_CLASS);
      if (!hasVisibleClass) {
        basic.style.borderBottomRightRadius = 0;
        basic.style.transition = "all ease 0.3s";
        p_basic.classList.add(VISIBLE_CLASS);
      }
    }
  };

  var detail_click = function () {
    detail_cnt += 1;
    var HIDE_CLASS = "hide";
    var VISIBLE_CLASS = "visible";
    if (detail_cnt % 2 === 1) {
      p_detail.classList.remove(VISIBLE_CLASS);
      ann_container.classList.remove(VISIBLE_CLASS);
      const hasHideClass = p_detail.classList.contains(HIDE_CLASS);
      if (!hasHideClass) {
        detail.style.borderRadius = "1em";
        detail.style.transition = "all ease 0.3s";
        p_detail.classList.add(HIDE_CLASS);
        ann_container.classList.add(HIDE_CLASS);
      }
    } else {
      p_detail.classList.remove(HIDE_CLASS);
      ann_container.classList.remove(HIDE_CLASS);
      const hasVisibleClass = p_detail.classList.contains(VISIBLE_CLASS);
      if (!hasVisibleClass) {
        detail.style.borderBottomRightRadius = 0;
        detail.style.transition = "all ease 0.3s";
        p_detail.classList.add(VISIBLE_CLASS);
        ann_container.classList.add(VISIBLE_CLASS);
      }
    }
  };

  var review_click = function () {
    review_cnt += 1;
    var HIDE_CLASS = "hide";
    var VISIBLE_CLASS = "visible";
    if (review_cnt % 2 === 1) {
      p_review.classList.remove(VISIBLE_CLASS);
      const hasHideClass = p_review.classList.contains(HIDE_CLASS);
      if (!hasHideClass) {
        review.style.borderRadius = "1em";
        review.style.transition = "all ease 0.3s";
        p_review.classList.add(HIDE_CLASS);
      }
    } else {
      p_review.classList.remove(HIDE_CLASS);
      const hasVisibleClass = p_review.classList.contains(VISIBLE_CLASS);
      if (!hasVisibleClass) {
        review.style.borderBottomRightRadius = 0;
        review.style.transition = "all ease 0.3s";
        p_review.classList.add(VISIBLE_CLASS);
      }
    }
  };

  basic.addEventListener("click", basic_click);
  detail.addEventListener("click", detail_click);
  review.addEventListener("click", review_click);
};

var danger_click = function () {
  click_cnt[event.target.id - 1]++;
  /* console.log("click:" + click_cnt[event.target.id - 1]); */
  if (click_cnt[event.target.id - 1] === 1) {
    temp[event.target.id - 1] = event.target.innerText;
  }
  //console.log(event.target.id)
  //event.target.parentNode.innerText = ""
  if (click_cnt[event.target.id - 1] % 2 === 0) {
    /* console.log(event.target.id, ":clicks-", click_cnt[event.target.id-1], ":temps-", temp[event.target.id - 1]); */
    event.target.innerText = temp[event.target.id - 1];
    event.target.style.fontSize = "1em";
    event.target.style.lineHeight = "1.5em";
    event.target.parentNode.style.borderRadius = "3em";
    event.target.parentNode.style.borderBottomRightRadius = "0em";
    if (isDanger[event.target.id - 1]) {
      data[event.target.id - 1].parentNode.childNodes[1].style.opacity = 1;
    }
  } else if (click_cnt[event.target.id - 1] % 2 === 1) {
    /* console.log(event.target.id, ":click-", click_cnt[event.target.id-1], ":temp-", temp[event.target.id - 1]); */
    event.target.innerText =
      "\n" +
      temp[event.target.id - 1] +
      " / " +
      "\n" +
      recommended[event.target.id - 1];
    event.target.style.fontSize = "0.8em";
    event.target.style.lineHeight = "1.2em";
    event.target.parentNode.style.borderRadius = "3em";
    data[event.target.id - 1].parentNode.childNodes[1].style.opacity = 0;
  }
};
