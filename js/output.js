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
const best_review_color = ["#004f05", "#003d0fbd", "#003d0f75", "#003d0f3a", "#003d0f1a"];
const worst_review_color = ["#7800001c", "#78000052", "#7800008f", "#780000c2", "#730b00"];
const state = 0.85;
var best_state = "0%";
var worst_state = "0%";

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
  const best_review = document.querySelector(".best_review");
  const worst_review = document.querySelector(".worst_review");
  
  const orientation = "to bottom right";
  let state_per = state * 100;

  state_per = state * 100;
  best_state = " " + (state_per-7) + "%,";
  var stop_point = 0;
  stop_point = (state_per)
  stop_state = " " + stop_point + "%, ";
  worst_state = " " + 100 + "%)";

  review.style.backgroundImage = 'linear-gradient('
    + orientation + ', ' + best_review_color[0] + best_state + "#363000" + stop_state + worst_review_color[4] + worst_state;
  console.log(review.style.backgroundImage);
  const touch = function (event) {
    isTouch = true;
    click_visible.classList.remove("visible");
    click_visible.style.opacity = 0;

    main.style.opacity = 1;
    detail.style.opacity = 1;
    p_detail.style.opacity = 1;
    ann_container.style.opacity = 1;
    review.style.opacity = 1;
    p_review.style.opacity = 1;
    body.removeEventListener("click", touch);
  };

  window.addEventListener("scroll", function (event) {
    
    var scroll = this.scrollY;
    if (
      (scroll > basic.offsetTop - window.outerHeight/2.8) && (scroll < basic.offsetTop + window.outerHeight/1.8) &&
      (isTouch === false)
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
      p_review.style.opacity = 0.25;
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
                click_visible.style.position = "absolute";
                click_visible.style.top = 0;
                click_visible.style.left = 0;
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
     ((scroll < basic.offsetTop - window.outerHeight) && (isTouch === false)) ||
      scroll >= basic.offsetTop + window.outerHeight * 1.6 &&
      isTouch === false
    ) {
      main.style.opacity = 1;
      detail.style.opacity = 1;
      p_detail.style.opacity = 1;
      ann_container.style.opacity = 1;
      review.style.opacity = 1;
      p_review.style.opacity = 1;
      click_visible.classList.remove("visible");
      click_visible.style.opacity = 0;
    } else if (isTouch === true) {

    }
  

  for (var i = 0; i < recommended.length; i++) {
    data[i].addEventListener("click", danger_click);
  }
});

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
}};
