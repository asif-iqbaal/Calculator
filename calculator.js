let num1 = document.querySelector('.btn1');
let scrn = document.getElementById('sid');
let num2 = document.querySelector('.btn2');
let num3 = document.querySelector('.btn3');
let num4 = document.querySelector('.btn4');
let num5 = document.querySelector('.btn5');
let num6 = document.querySelector('.btn6');
let num7 = document.querySelector('.btn7');
let num8= document.querySelector('.btn8');
let num9 = document.querySelector('.btn9');
let num10 = document.querySelector('.btn10');
let num11 = document.querySelector('.btn11');
let num12 = document.querySelector('.btn12');
let num13 = document.querySelector('.btn13');
let num14 = document.querySelector('.btn14');
let num15 = document.querySelector('.btn15');
let num16 = document.querySelector('.btn16');

let num17 = document.querySelector('.btn01');
let num18 = document.querySelector('.btn02');
let num19 = document.querySelector('.btn03');


num1.addEventListener('click',() => {
  scrn.value += "1";
})
num2.addEventListener('click',() => {
    scrn.value += "2";
  })
  num3.addEventListener('click',() => {
    scrn.value += "3";
  })
  num4.addEventListener('click',() => {
    scrn.value += "/";
  })
  num5.addEventListener('click',() => {
    scrn.value += "4";
  })
  num6.addEventListener('click',() => {
    scrn.value += "5";
  })
  num7.addEventListener('click',() => {
    scrn.value += "6";
  })
  num8.addEventListener('click',() => {
    scrn.value += "*";
  })
  num9.addEventListener('click',() => {
    scrn.value += "7";
  })
  num10.addEventListener('click',() => {
    scrn.value += "8";
  })
  num11.addEventListener('click',() => {
    scrn.value += "9";
  })
  num12.addEventListener('click',() => {
    scrn.value += "+";
  })
  num13.addEventListener('click',() => {
    scrn.value += "00";
  })
  num14.addEventListener('click',() => {
    scrn.value += "0";
  })
  
  num16.addEventListener('click',() => {
    scrn.value += "-";
  })
  num15.addEventListener('click', () => {
    try {
      scrn.value = math.evaluate(scrn.value); // Using math.js to evaluate the expression
    } catch (e) {
      scrn.value = "Error"; // Handling any errors that occur during evaluation
    }
  });

  num17.addEventListener('click',() => {
    scrn.value = "0";
  })
  num18.addEventListener('click',() => {
    scrn.value = scrn.value.slice(0,-1);
  })
  num19.addEventListener('click',() => {
    scrn.value += ".";
  })
  document.querySelector('.btn04').addEventListener('click', () => {
  try {
    let currentValue = parseFloat(scrn.value);
    if (!isNaN(currentValue)) {
      scrn.value = (currentValue / 100).toString();
    } else {
      scrn.value = "Error";
    }
  } catch (e) {
    scrn.value = "Error"; 
  }
});
