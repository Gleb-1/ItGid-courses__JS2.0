
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
localStorage.setItem('5',1);
}
document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

a2 = [7,6,5];
function t2() {
localStorage.setItem('a2',JSON.stringify(a2));
}
document.querySelector('.b-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let out = '';
    let b = localStorage.getItem('a2')
    b = JSON.parse(b);
    // console.log(b);
    for ( let i = 0; i < b.length; i++ ) {
        out += i + ':' + b[i] + '<br>';
    }
document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = {hello: 'world', hi:'mahai'};
function t4() {
    localStorage.setItem('a4',JSON.stringify(a4));
}
document.querySelector('.b-4').onclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    let out = '';
let b = localStorage.getItem('a4');
    b = JSON.parse(b);
    console.log(b);
        for ( let key in b ) {
            out += `${key}:${b[key]}<br>`;
        }
        document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}
document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let a7 = [];
function t7() {
let tempArray;
    let input = document.querySelector('.i-7').value;
    if ( input.trim() != '' ) {
        a7.push(input);
    if ( localStorage.getItem('a7') != null ) {
        tempArray = JSON.parse(localStorage.getItem('a7'));
        tempArray.push(input);  
        localStorage.setItem('a7', JSON.stringify(tempArray));
    }
    else {
        localStorage.setItem('a7', JSON.stringify(a7));
    }
}
document.querySelector('.i-7').value = '';
console.log(a7);
}
document.querySelector('.b-7').onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let temp;
    if ( localStorage.getItem('a7') != null ) {
        temp = JSON.parse(localStorage.getItem('a7'));
        temp.pop();
        localStorage.setItem('a7',JSON.stringify(temp));
    }
}
document.querySelector('.b-8').onclick = t8;
    
// ваше событие здесь!!!


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

// window.addEventListener('storage', function(e) {
//     console.log(12);
//     document.querySelector('.out-9').textContent = localStorage.getItem('item');
// });

let radio = document.querySelectorAll('.form-control input[name = "rb-9"]');
    for ( let i = 0; i < radio.length; i++ ) {
        radio[i].onchange = function () {
            if ( radio[i].checked ) {
                // console.log (radio[i].value);
                localStorage.setItem ( 'bg', radio[i].value );
                document.querySelector('fieldset').style.backgroundColor = localStorage.getItem('bg');
            }
        }
    }
// ваше событие здесь!!!


// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

// Task 14 ============================================
 /*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

const card = {
    'apple': 3,
    'grape': 2,
    'potato': 8
}

function saveCartToLS(pickUp){ //функция t10
    // localStorage.setItem('card', JSON.stringify(pickUp));
    // showCart ();
    checkCart();
    totalQuantity()
    plusProduct ();
}

document.querySelector('.b-10').onclick = function () {
    saveCartToLS(card);
} 

function showCart () { // функция t11
    let getCard = JSON.parse(localStorage.getItem ('card'));
    let out = '';
        for ( let key in getCard ) {
            out += `<div class = "wrapper">`
            out += `<h3>${key}</h3>`;
            out += `<div class= "control"> <p>Количество <span class = "quantity" data-art-quantity = "${key}">${getCard[key]}</span></p>
            <button  class="button-primary plus" data-art = "${key}">+</button><button  class="button-primary minus" data-art = "${key}">-</button>
           </div>`;
            out += `</div>`;
        }
        document.querySelector('.out-10').innerHTML = out; 
}

function plusProduct () { // функция t12 добавляем кнопки+ -
    document.querySelectorAll('.control').forEach(function (elem,index){

        elem.querySelector('.plus').onclick = function () {
        +elem.querySelector('.quantity').textContent++;

            let pickUp = JSON.parse(localStorage.getItem('card'));
            let dataP = elem.querySelector('.quantity').getAttribute('data-art-quantity');

            // console.log(pickUp);
            // console.log(dataP);

            pickUp[dataP]++;
            localStorage.setItem('card',JSON.stringify(pickUp));
            totalQuantity(); // общие кол-во товара записываем в LS
            }

            elem.querySelector('.minus').onclick = function () {
            elem.querySelector('.quantity').textContent--;
                
            let pickUp = JSON.parse(localStorage.getItem('card'));
            let dataP = elem.querySelector('.quantity').getAttribute('data-art-quantity');

            // console.log(pickUp);
            // console.log(dataP);

            if ( pickUp[dataP]-- < 1 ) {
                elem.querySelector('.quantity').textContent = 0;
                // pickUp[dataP] = 0;
                delete pickUp[dataP]; // если меньше одного уделяем данный товар с страницы 
            }
            console.log(pickUp[dataP]);
            localStorage.setItem('card',JSON.stringify(pickUp));
            totalQuantity(); 
            saveCartToLS(); // сохраняем в LS после того как данный товар был удален
            }   
    });
}

function totalQuantity() { // функция t13  выводим общие количество товара
    let sum = 0;
    document.querySelectorAll('.quantity').forEach(function(elem){
    sum += +elem.innerHTML;
    });
    document.querySelector('.out-11').innerHTML = 'Общие количество товара' +': '+ sum;
}

function checkCart() { // функция t14  проверяем содержит ли карниза что то после загрузки страницы
    if (localStorage.getItem('card') !== null) {
    showCart ();
    }
    else {
    document.querySelector('.out-10').innerHTML = 'Корзина пуста';
    }
}

window.addEventListener('storage', checkCart);



function save(q) {
    localStorage.setItem('testColl', q);
    }
    coll = 0;
    function buttonTest() {
    let coll = localStorage.getItem('testColl');
    document.querySelector('.out_test').innerHTML = coll;
    coll++;
    save(coll);
    }
    document.querySelector('.test').onclick = buttonTest;


// function save() {
// localStorage.setItem('testColl', JSON.parse(coll));
// document.querySelector('.out_test').innerHTML = JSON.parse (localStorage.getItem('testColl'));
// // document.querySelector('.out_test').innerHTML = '';
// }
// document.querySelector('.out_test').innerHTML = JSON.parse (localStorage.getItem('testColl'));

// // save();
// let coll = 0;
// function buttonTest() {
//     console.log('click');
// document.querySelector('.out_test').innerHTML = coll;
// coll++;
// // localStorage.setItem('testColl', coll);
// save();
// }
// document.querySelector('.test').onclick = buttonTest;



'======================================================================================================================================================='

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

// const card = {
//     'apple': 3,
//     'grape': 2,
//     'potato': 8
// }

// function t10(quantity) {
//   localStorage.setItem('card', JSON.stringify(quantity));
//   document.querySelector('.out-10').innerHTML = '';
//   t11();
//   t12();
  
// }
// document.querySelector('.b-10').onclick = () => { t10(card) };
// // Task 11 ============================================
// /*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после
//  перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

// function t11() {
//   let list = document.createElement('table');
//   list.innerHTML = '<tr><th>Название товара</th><th>Количество товара</th></tr>';
//   document.querySelector('.out-10').append(list);
//   let cart = JSON.parse(localStorage.getItem('card'));
//   let result = 0;
//   for (let item in cart) {
//     result += cart[item];
//     list.innerHTML += `<tr><td class='good'>${item}</td><td><div class='selectionQuantity'><button class="button-primary plus">+</button><p data-good='${item}' class='quantity'>${cart[item]}</p><button class="button-primary minus">-</button></div></td></tr>`;
//   }
//   localStorage.setItem('card', JSON.stringify(cart));
//   if (result <= 0) {
//     list.innerHTML += `<tr><tfoot>Итого: 0</tfoot></tr>`;
//   } else {
//     list.innerHTML += `<tr><tfoot>Итого: ${result}</tfoot></tr>`;
//   }
  
// }

// // ваше событие здесь!!!

// // Task 12 ============================================
// /*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

// function t12() {

 
//   document.querySelectorAll('.selectionQuantity').forEach(function (elem, index) {
//     let cart = JSON.parse(localStorage.getItem('card'));
//     let good = elem.querySelector('.quantity').getAttribute('data-good');

//       elem.querySelector('.plus').onclick = () => {
//         +elem.querySelector('.quantity').textContent++;
//         for (let i in cart) {
//           if (i == good) { cart[i] = +elem.querySelector('.quantity').textContent; }
//         }
        
//         t10(cart);
//     }
    
//       elem.querySelector('.minus').onclick = () => {
//         +elem.querySelector('.quantity').textContent--;
//         if (+elem.querySelector('.quantity').textContent <= 0) {
//           elem.querySelector('.quantity').textContent = 0;
//         }
//         for (let i in cart) {
//           if (i == good) {cart[i] = +elem.querySelector('.quantity').textContent;}
//         }
        
//         t10(cart);
//     }

//   })
  
// }

// // ваше событие здесь!!!

// // Task 13 ============================================
// /*  Добавьте в таблицу footer который считает общее количество товара. */



// // ваше событие здесь!!!
    
// // Task 14 ============================================
// /*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

// function t13() {

//   if (localStorage.getItem('card') !== null) {
//     t10(JSON.parse(localStorage.getItem('card')));
//   } else {
//     document.querySelector('.out-10').textContent = 'Корзина пуста';
//   }
// }
// window.addEventListener('storage', t13) ;
// const card = {
//     '1' : {
//         'name' : 'Apple',
//         'quantity' : 1,
//         'image': 'https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-128.png'
//     },

//     '2' : {
//         'name' : 'Banana',
//         'quantity' : 1,
//         'image': 'https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png'
//     },
    
//     '3' : {
//         'name' : 'Сherry',
//         'quantity' : 1,
//         'image': 'https://cdn0.iconfinder.com/data/icons/fruit-96/208/Cherry-128.png'
//     }
// };

// function t10() {
// localStorage.setItem('card', JSON.stringify(card))
// }
// document.querySelector('.b-10').onclick = t10;



// function t11() {
// let out = '';
// let a = localStorage.getItem('card');
// a = JSON.parse(a);
//     for ( let key in a ) {
//        out += `<div class = "bord">`; 
//        out += `<h3>${a[key]['name']}</h3><p>количество ${a[key]['quantity']}</p>`;
//        out += `<img src = ${a[key]['image']}>`;
//        out += `<button class = "button-primary plus" data-art-plus = "${a[key]['quantity']}">+</button>`;
//        out += `<button class = "button-primary linus" data-art-minus = "${a[key]['quantity']}">-</button>`;
//        out +=   `</div>`
//     }
//     document.querySelector('.out-10').innerHTML = out;
//     let but =  document.querySelectorAll('.bord button');
//     but.forEach(function(elem,index){
//         elem.onclick = basket;
//     });
// }
// t11();

// let q = 0;

// function basket () {
//     let quantityMinus = this.getAttribute('data-art-plus');
//     console.log(quantityMinus);
//         quantityMinus++;

//     // console.log(card);
// }

// ваше событие здесь!!!



// const card1 = {
//     'apple': 3,
//     'grape': 2
// }

// let q = 0;
// q++;
// function t12 () {
// let out = '';
//     for ( let key in card1 ) {
//         out += `${key} `;  
//         if ( key == 'apple' ) {
//             out += `${card1[key] += q}<br>`
//         }
//     }
//     document.querySelector('.out-11').innerHTML = out;
// }
// document.querySelector('.plus').onclick = t12;



// console.log(butt);
// ваше событие здесь!!!

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {

}

// ваше событие здесь!!!



// let cardLS = localStorage.getItem('card');
//   cardLS = JSON.parse(cardLS);
//   let dataLS = '';

//   for (let key in cardLS) {
//     dataLS += `
//     <tr>
//       <td data-name="${key}">${key}</td>
//       <td data-quantity="${cardLS[key]}">${cardLS[key]}</td>
//       <td><button class="button-primary plus-minus" data-name="${key}" value="plus">&#43;</button></td>
//       <td><button class="button-primary plus-minus" data-name="${key}" value="minus">&minus;</button></td>
//     </tr>
//     `;
//   }

//   // Выводим таблицу
//   document.querySelector('.out-10').innerHTML = `
//   <table>
//     <caption>Выбранные товары</caption>
//     <thead>
//       <tr>
//         <th>Item</th>
//         <th>Quantity</th>
//         <th colspan="2">Change quantity</th>
//       </tr>
//     </thead>
//     <tbody>${dataLS}</tbody>
//     <tfoot>
//       <tr>
//         <td><button class="button-primary b-13">Расчитать</button></td>
//         <td colspan="2" data-total></td>
//       </tr>
//     <tfoot>
//   </table>
//   `;