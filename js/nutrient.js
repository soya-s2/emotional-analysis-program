window.onload = function () {
  const recommended = [130, 60, 50, 2300, 1500, 50, 750, 3500, 300];
  /*
  const carbohydarate = 130;
  const protein = 60;
  const fat = 50;
  const kcal = 2300;
  const salt = 1500;
  const sugar = 50;
  const calcium = 750;
  const potassium = 3500;
  const cholesterol = 300;
  */
  var data = document.getElementsByTagName('p');
  const TRANS_CLASS = 'trans';
  for (var i = 0; i < recommended.length; i++) {
    const parent = data[i].parentNode;
    const danger = 0.07;
    const warn = 0.05;
    const normal = 0.03;
    const hasTransClass = parent.classList.contains(TRANS_CLASS);
    if (data[i].innerText > recommended[i] * danger) {
      parent.style.backgroundColor = '#bd0d00';
      setTimeout(function () {
        setTimeout(function () {
          setTimeout(function () {
            setTimeout(function () {
              parent.style.backgroundColor = '#bd0d00';
            }, 500);
            parent.classList.remove(TRANS_CLASS);
            parent.style.backgroundColor = 'black';
          }, 500);
          if (!hasTransClass) {
            parent.classList.add(TRANS_CLASS);
            parent.style.backgroundColor = '#bd0d00';
          }
        }, 500);
        parent.classList.remove(TRANS_CLASS);
        parent.style.backgroundColor = 'black';
      }, 500);
    } else if (data[i].innerText > recommended[i] * warn) {
      parent.style.backgroundColor = '#e6c715';
    } else {
      parent.style.backgroundColor = '#00730b';
    } 
    if (!hasTransClass) {
      parent.classList.add(TRANS_CLASS);
    } else {
      parent.classList.remove(TRANS_CLASS);
    }
    
  }
};