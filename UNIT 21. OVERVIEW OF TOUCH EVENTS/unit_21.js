// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
  return (this.textContent = 'touch');
}
document.querySelector('.div-1').ontouchstart = function () {
  document.querySelector('.out-1').textContent = t1();
};
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let amount = 0;

function t2() {
  return (this.textContent = amount++);
}
document.querySelector('.div-2').ontouchstart = function () {
  document.querySelector('.out-2').textContent = t2();
};
// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
  let out = '';
  console.log(e);
  if (e.target == document.querySelector('.div-3_1')) out = 1;
  else if (e.target == document.querySelector('.div-3_2')) out = 2;
  document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
  document.querySelector('.out-4').innerHTML = 'touch';
}
document.querySelector('.b-4').onclick = function () {
  document.querySelector('.div-4').ontouchstart = t4;
};
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5(e) {
  e.preventDefault();
}
document.querySelector('.b-5').onclick = function () {
  document.querySelector('.div-4').ontouchstart = t5;
};

//=================================================================================================
// function smart() {
//   document.querySelector('.div-4').addEventListener('click', t4);

//  }
// function t4() {
//   document.querySelector('.out-4').innerHTML = 'touch';
// }

// // ваше событие здесь!!!
// document.querySelector('.b-4').addEventListener('click', smart);

// document.querySelector('.b-5').addEventListener('click', ()=>{
// document.querySelector('.div-4').removeEventListener('click', t4)
// });
//=================================================================================================

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
  return (this.textContent = 'touchend');
}
document.querySelector('.div-4').ontouchend = function () {
  document.querySelector('.out-6').textContent = t6();
};
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
  this.style.backgroundColor = 'red';
}
document.querySelector('.div-7').ontouchend = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
  this.style.backgroundColor = a8[Math.floor(Math.random(this) * (a8.length - 1))];
}
document.querySelector('.div-8').ontouchend = t8;
// ваше событие здесь!!!

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
  document.querySelector('.out-9').innerHTML = e.touches.length;
}
document.querySelector('.div-9').ontouchstart = t9;

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let wid = 75;
function t10() {
  this.innerHTML = this.style.width = wid + 'px';
  wid++;
}

document.querySelector('.div-10').ontouchmove = t10;

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
  console.log(e);
  document.querySelector('.out-11').innerHTML = e.touches[0].radiusX + ' ';
  document.querySelector('.out-11').innerHTML += e.touches[0].radiusY;
}
document.querySelector('.div-11').ontouchstart = t11;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

let div_12_max = document.querySelector('.div-12-max img');
let div_12_warapper = document.querySelectorAll('div-12-wrapper img');

let count = 0;

function activ(count) {
  div_12_max.src = div_12_warapper[count].src;
  div_12_warapper.forEach(function (elem) {
    if (div_12_max.src == elem.src) elem.classList.add('active-img');
    else elem.classList.remove('active-img');
  });
}

document.querySelector('.next').ontouchstart = function () {
  count++;
  if (count > 5) count = 0;
  activ(count);
};

document.querySelector('.prev').ontouchstart = function () {
  count--;
  if (count < 0) count = 5;
  activ(count);
};

document.querySelector('.reset').ontouchstart = function () {
  count = 0;
  activ(count);
};

div_12_warapper.forEach(function (elem, index) {
  elem.ontouchstart = function () {
    count = index;
    activ(count);
  };
});

// ваше событие здесь!!!
