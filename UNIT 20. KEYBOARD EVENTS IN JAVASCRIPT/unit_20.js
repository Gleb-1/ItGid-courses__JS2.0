// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
  document.querySelector('.out-1').innerHTML = this.value;
}

document.querySelector('.i-1').oninput = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
  let out = '';
  out += 'charCode: ' + e.charCode + ' ';
  out += 'keyCode: ' + e.keyCode;
  document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.i-2').onkeypress = t2;
// ваше событие здесь!!!

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3(e) {
  let out = '';
  if (e.keyCode >= 48 && e.keyCode <= 57) out = true;
  else out = false;
  document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.i-3').onkeydown = t3;

// ваше событие здесь!!!

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
  document.querySelector('.out-4').innerHTML = this.value.toLowerCase();
}

document.querySelector('.i-4').onkeydown = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
  document.querySelector('.out-5').innerHTML = this.value.toUpperCase();
}
document.querySelector('.i-5').onkeydown = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
  if (e.shiftKey == false) e.stopPropagation();
  else e.preventDefault();
}
document.querySelector('.i-6').onkeydown = t6;
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
const a7 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

function t7(e) {
  //   a7.push(e.key);
  //   console.log(a7);
  document.querySelector('.out-7').innerHTML += a7[Math.round(Math.random(this) * (a7.length - 1))];
}
document.querySelector('.i-7').onkeypress = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
  let out = '';
  console.log(e);
  if (e.key == 'i') out = '1';
  else if (e.key == 'o') out = '0';
  else if (e.key == 'l') out = '7';
  else out += e.key;
  document.querySelector('.out-8').innerHTML += out;
}

document.querySelector('.i-8').onkeypress = t8;
// ваше событие здесь!!!

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let a = 1;
function t9(e) {
  console.log(e);
  if (e.key == 'ArrowDown') {
    document.querySelector('.out-9').innerHTML = a++;
  }
}
document.querySelector('.i-9').onkeydown = t9;
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let arrowLeft_Right = 75;
let arrowlDown_Up = 75;

function t10(e) {
  let image = document.querySelector('.div-10 img');
  //   console.log(image);
  if (e.key == 'ArrowLeft') {
    image.style.width = arrowLeft_Right + 'px';
    arrowLeft_Right++;
  }
  if (e.key == 'ArrowRight') {
    image.style.width = arrowLeft_Right + 'px';
    arrowLeft_Right++;
  }
  if (e.key == 'ArrowDown') {
    image.style.height = arrowlDown_Up + 'px';
    arrowlDown_Up++;
  }
  if (e.key == 'ArrowUp') {
    image.style.height = arrowlDown_Up + 'px';
    arrowlDown_Up++;
  }
}
document.querySelector('.i-10').onkeydown = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

// function t11() {}

let bord = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#92', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctr', 'Meta', 'Alt', 'Space', 'Alt', 'Meta', 'ContMenu', 'Ctr'];

const obj = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight'];

const key = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period'];

const keyRus = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];

console.log(key);
console.log(keyRus);

// shif 16 ctr 17 CapsLock 20 windows 91 92 alt 18 esc 27
// ваше событие здесь!!!

// document.querySelector('.i-11').onkeydown = (e) => {
//   key.push(e.code);
//   console.log(key);
//   // console.log(e);
// };
// console.log(key);

function init() {
  let out = '';
  for (let i = 0; i < bord.length; i++) {
    if (bord[i] == 'Tab' || bord[i] == 'CapsLock' || i == 41 || i == 53) out += '<div class= "clearfix"></div>';
    out += '<div class = "key" data = "' + obj[i] + '">' + bord[i] + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = out;
}
init();

function t11(e) {
  document.querySelector('.key[data= "' + e.code + '"]').classList.add('active');
}

function t12(e) {
  document.querySelector('.key[data= "' + e.code + '"]').classList.remove('active');
}

let flag = false;

// function changeLayout(e) {
//   let keyboard = document.querySelectorAll('.key');
//   // console.log(keyboard);
//   // console.log(flag);
//   for (let i = 0; i < keyboard.length; i++) {
//     if (e.key == 'Alt') flag = true;
//     if (e.key == 'Shift' && flag) {
//       document.querySelector('.key[data= "' + key[i] + '"]').innerHTML = key[i];
//     } else {
//       init();
//     }
//   }
// }

// function upper(e) {
//   let keyboard = document.querySelectorAll('.key');
//   for (let i = 0; i < keyboard.length; i++) {
//     if (e.code == 'CapsLock') {
//       document.querySelector('.key[data= "' + obj[i] + '"]').classList.toggle('appercase');
//     }
//   }
// }

document.querySelector('.i-11').addEventListener('keydown', t11);
document.querySelector('.i-11').addEventListener('keyup', t12);
// document.querySelector('.i-11').addEventListener('keydown', upper);
// document.querySelector('.i-11').addEventListener('keydown', changeLayout);

// document.onkeydown = function (e) {
//   console.log('onkeydown: ==============================================================================');
//   console.log(e);
//   console.log('onkeydown: keyCode' + e.keyCode);
//   console.log('onkeydown: charCode' + e.charCode);
// };

// document.onkeypress = function (e) {
//   console.log('onkeypress: ==============================================================================');
//   console.log(e);
//   console.log('keyCode ' + e.keyCode);
//   console.log('charCode' + e.charCode);
// };
