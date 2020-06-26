
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 1);
}
document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

a2 = [7, 6, 5];
function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
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
    for (let i = 0; i < b.length; i++) {
        out += i + ':' + b[i] + '<br>';
    }
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = { hello: 'world', hi: 'mahai' };
function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
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
    for (let key in b) {
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
    if (input.trim() != '') {
        a7.push(input);
        if (localStorage.getItem('a7') != null) {
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
    if (localStorage.getItem('a7') != null) {
        temp = JSON.parse(localStorage.getItem('a7'));
        temp.pop();
        localStorage.setItem('a7', JSON.stringify(temp));
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
for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = function () {
        if (radio[i].checked) {
            // console.log (radio[i].value);
            localStorage.setItem('bg', radio[i].value);
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

function saveCartToLS(pickUp) { //функция t10
    localStorage.setItem('card', JSON.stringify(pickUp));

    showCart ();
}

document.querySelector('.b-10').onclick = function () {
    saveCartToLS(card);
}

function showCart() { // функция t11
    let getCard = JSON.parse(localStorage.getItem('card'));
    let out = '';
    for (let key in getCard) {
        out += `<div class = "wrapper">
                    <h3>${key}</h3>
                    <div class= "control">
                        <p>Количество <span class = "quantity" data-art-quantity = "${key}">${getCard[key]}</span></p>
                        <button  class="button-primary plus" data-art = "${key}">+</button>
                        <button  class="button-primary minus" data-art = "${key}">-</button>
                    </div>                             
                </div>`;
    }
    document.querySelector('.out-10').innerHTML = out ;
    plusProduct();
}

function plusProduct() { // функция t12 добавляем кнопки+ -
    let pickUp = JSON.parse(localStorage.getItem('card'));
    document.querySelectorAll('.control').forEach(function (elem) {

        elem.querySelector('.plus').onclick = function () {

            let dataP = this.getAttribute('data-art'); ///так гораздо понятнее откуда берется ключ
            +elem.querySelector('.quantity').textContent++;

            pickUp[dataP]++;

            saveCartToLS(pickUp) 

        }

        elem.querySelector('.minus').onclick = function () {

            let dataP = elem.querySelector('.quantity').getAttribute('data-art-quantity'); ///аналогично this.getAttribute('data-art');

            elem.querySelector('.quantity').textContent--;
            pickUp[dataP]--;

            if (pickUp[dataP] <=0) {
                elem.querySelector('.quantity').textContent = 0;
                pickUp[dataP] = 0; // если меньше одного уделяем данный товар с страницы 
                ///лучше не удалять, а опускать значение до нуля
            } 

            saveCartToLS(pickUp); ///Вызов этой функции заменяет мнного букв ниже
            //localStorage.setItem('card', JSON.stringify(pickUp)); //сохраняем в LS (уменьшения) минуса на один при нажатие кнопки
            //totalQuantity(); // общие кол-во товара записываем в LS
            //saveCartToLS(); // сохраняем в LS после того как данный товар был удален
        }
    });
    totalQuantity();///так труднее запутаться, если вызов будет тут
}

function totalQuantity() { // функция t13  выводим общие количество товара
    let sum = 0;
    document.querySelectorAll('.quantity').forEach(function (elem) {
        sum += +elem.innerHTML;
    });
    document.querySelector('.out-11').innerHTML = 'Общие количество товара' + ': ' + sum;
}

function checkCart() { // функция t14  проверяем содержит ли карниза что то после загрузки страницы
    if (localStorage.getItem('card') == null) {///я поменял местами проверку. Это не критичное дествие, получается тот же самый результат.
         document.querySelector('.out-10').innerHTML = '';///обрати внимание на этот вывод и вывод ниже
         document.querySelector('.out-11').innerHTML = 'Корзина пуста';
    }
    else {
        let getCard = JSON.parse(localStorage.getItem('card'));
        //showCart(); ///Это ни к чему хорошему не ведет. Тольк переполняется 'call stack'
        saveCartToLS(getCard)
       
    }
}
window.addEventListener('load', checkCart);///этот код поможет проверить если что в LS и, если есть, выполнить функцию checkCart
window.addEventListener('storage', checkCart);///этот слушатель тебе нужен для того, чтобы все страницы общего домена получали доступ к 
//LS и могли менять динамически свое содержимое
