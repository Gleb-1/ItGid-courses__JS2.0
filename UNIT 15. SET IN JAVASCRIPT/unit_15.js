// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль.

let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
for (let item of s1) {
  //   console.log(item);
}
// console.log(s1);

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы вводимые пользователем в i-2. Функция должна возвращать s2.

let s2 = new Set();

function f2() {
  let input = document.querySelector('.i-2').value;
  s2.add(input);
  return s2;
}

document.querySelector('.b-2').onclick = () => {
  console.log(f2());
};

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3, строку введенную пользователем в i-3. Функция должна возвращать s3.

let s3 = new Set(['one', 'two', 'four']);

function f3() {
  let input = document.querySelector('.i-3').value;
  s3.delete(input);
  return s3;
}

document.querySelector('.b-3').onclick = () => {
  console.log(f3());
};

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let s4 = new Set(['a', 'b', 'c', 'z']);

function f4() {
  let input = document.querySelector('.i-4').value;
  document.querySelector('.out-4').innerHTML = s4.has(input);
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// // При нажатии b-5 выполняете функцию f5. Функция должна  вывести в out-5 длину набора s5.

let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

function f5() {
  document.querySelector('.out-5').innerHTML = s5.size;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

function f6() {
  let out = '';
  let a = new Set(a6);
  for (let item of a) {
    out += item + ' ';
  }
  document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.

function f7() {
  let out = '';
  let input = document.querySelector('.i-7').value;
  let password = new Set(input);
  if (password.size > 6) out = 1;
  else if (password.size <= 6) out = 0;
  document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна создать массив res8 на основе набора, но добавить только те значения из s8, которых больше 5. Функция должна возвратить res8.

let s8 = new Set([[1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]]);

function f8() {
  let res8 = [];
  let ar = Array.from(s8);
  console.log(ar);
  for (let item of ar[0]) {
    if (item > 5) {
      res8.push(item);
    }
  }
  return res8;
}

document.querySelector('.b-8').onclick = () => {
  console.log(f8());
};

// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор set в качестве параметра, преобразовывать его в массив и возвращать в виде строки. При преобразовании массива в строку между элементами должен быть пробел.

function f9(our_set) {
  let ar = Array.from(our_set);
  return ar.join(' ');
}

document.querySelector('.b-9').onclick = () => {
  let s9 = new Set([9, 8, 7, 6, 5]);
  document.querySelector('.out-9').innerHTML = f9(s9);
};

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

function f10(out_set, elem) {
  let out = '';
  for (let item of out_set) {
    console.log(item);
    out += item + ' ';
  }
  document.querySelector(elem).innerHTML = out;
}

document.querySelector('.b-10').onclick = () => {
  let a10 = new Set(['4', '5', '6']);
  f10(a10, '.out-10');
};

// Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.

let a11 = [[1], [1]];

function f11() {
  let setNew = new Set(a11);
  console.log(setNew);
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

function f12() {
  let ar = Array.from(str12);
  let newSet = new Set(ar);
  return newSet;
}

document.querySelector('.b-12').onclick = () => {
  console.log(f12());
};

// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде массива типа { символ : количество, символ : количество } вернуть в функции.

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

function f13() {
  let ar13 = Array.from(str13.toLowerCase());
  let q13 = new Set(ar13);
  let out = {};
  for (let item of q13) {
    let count = 1;
    for (let i = 0; i < ar13.length; i++) {
      if (item == ar13[i]) {
        out[item] = count;
        count++;
      }
    }
  }
  return out;
}

document.querySelector('.b-13').onclick = () => {
  console.log(f13());
};

// function f13() {
//   let ar13 = Array.from(str13.toLowerCase());
//   let qw13 = new Set(ar13);
//   let out = {};
//   for (let item of qw13) {
//     out[item] = ar13.filter(function (elem) {
//       if (elem == item) return elem;
//     }).length;
//   }
//   return out;
// }
// document.querySelector('.b-13').onclick = () => {
//   console.log(f13());
// };
