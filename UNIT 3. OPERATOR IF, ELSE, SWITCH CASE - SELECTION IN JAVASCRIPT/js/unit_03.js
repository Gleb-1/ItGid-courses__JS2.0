// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.


document.querySelector('.i-1');
let a2 = document.querySelector('.out-1');
document.querySelector('.b-1').onclick = function f1 () {
    let num =+ document.querySelector('.i-1').value;
if ( num == 4 ) {
    a2.innerHTML = ('true');
}
else  { 
    a2.innerHTML = ('false');
}
}





// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
document.querySelector('.out-2');

document.querySelector('.b-2').onclick = function f2 () {

    if ( a21 > a22 ) {
        document.querySelector('.out-2').innerHTML = (a21);
    }
    else {
        document.querySelector('.out-2').innerHTML = ('false');
    }
}


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

document.querySelector('.i-31');
document.querySelector('.i-32');
document.querySelector('.b-3').onclick = function f3 () {
    let num1 = parseInt (document.querySelector('.i-31').value);
    let num2 = parseInt (document.querySelector('.i-32').value);
    if ( num1 > num2 ) {
        document.querySelector('.out-3').innerHTML = (num1);
    }
    else{
        document.querySelector('.out-3').innerHTML = (num2);
    }
}


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let years = document.querySelector('.i-4');
years = 18;
document.querySelector('.b-4').onclick = function f4(){
    let num_3 =  document.querySelector('.i-4').value;
    if ( num_3 >= years) {
        document.querySelector('.out-4').innerHTML = (1);
    }
    else {
        document.querySelector('.out-4').innerHTML = (0);
    }
}

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.


let introduce = document.querySelector('.i-5');
introduce = 0;
document.querySelector('.b-5').onclick = function f5(){
    let num_4 = document.querySelector('.i-5').value;
    if ( num_4 < introduce ) {
        document.querySelector('.out-5').innerHTML = ('m');
    }
    else if ( num_4 > introduce ) {
        document.querySelector('.out-5').innerHTML = (1);
    }
    else {
        document.querySelector('.out-5').innerHTML = (0);
    }
}


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.


let even_odd = document.querySelector('.i-6');
even_odd = 0;
document.querySelector('.b-6').onclick = function f6 () {
    let num_5 = document.querySelector('.i-6').value;
    if (num_5 % 2 == even_odd) { 
        document.querySelector('.out-6').innerHTML = ('even');
    }
    else {
        document.querySelector('.out-6').innerHTML = ('odd');
    }
}


// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.


document.querySelector('.i-71');
document.querySelector('.i-72');
document.querySelector('.b-7').onclick = function f7 () {
    let num_6 = document.querySelector('.i-71').value;
    let num_7 = document.querySelector('.i-72').value;
        document.querySelector('.out-7').innerHTML = (num_6**num_7 );
}
// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

document.querySelector('.s-8');
document.querySelector('.b-8').onclick = function f8 () {
    let number = parseInt (document.querySelector('.s-8').value);
    switch (number) {
        case 1:
                document.querySelector('.out-8').innerHTML = ('one');
                break;
        case 2:
                document.querySelector('.out-8').innerHTML = ('two');
                break;
        case 3: 
                document.querySelector('.out-8').innerHTML = ('three');
                break;
        // default:
        //         document.querySelector('.out-8').innerHTML = ('okkk');
}
}

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//     если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.



document.querySelector('.i-9');
document.querySelector('.b-9').onclick = function f9 () {
    let num_8 = document.querySelector('.i-9').value;

if ( num_8 >= 1 && num_8 <= 32 ) {
    document.querySelector('.out-9').innerHTML = ('1');
}
else if ( num_8 >= 33 && num_8 <= 43 ){
document.querySelector('.out-9').innerHTML = ('2');
}
else if ( num_8 >= 44 && num_8 <= 64 ){
    document.querySelector('.out-9').innerHTML = ('3');
    }
else {
    document.querySelector('.out-9').innerHTML = ('0');
}
}

// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит две операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести 1+13.

document.querySelector('.i-101');
document.querySelector('.i-102');
document.querySelector('.s-103');
document.querySelector('.b-10').onclick = f10;
function f10 () {
    let input_101 =+ document.querySelector('.i-101').value;
    let input_102 =+ document.querySelector('.i-102').value;
    let number_2 = document.querySelector('.s-103').value;
    switch (number_2) {
        case '+':
                document.querySelector('.out-10').innerHTML = (input_101+input_102);
                break;
        case '-':
                document.querySelector('.out-10').innerHTML = (input_101-input_102);
                break;
        case '*': 
                document.querySelector('.out-10').innerHTML = (input_101*input_102);
                break;
        case '/': 
                document.querySelector('.out-10').innerHTML = (input_101/input_102);
                break;
        
}
}


// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0. Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции над выбранными числами и знаком. Т.е. если выбрали 1&&0 - то вывести 0, если 1||1 то 1.

document.querySelector('.b-11').onclick = f11;
function f11(){
let num_9 =+ document.querySelector('.s-111').value;
let num_10 =+ document.querySelector('.s-112').value;
let num_11 = document.querySelector('.s-113').value;
switch ( num_11) {
    case num_11 == '&&': 
            document.querySelector ('.out-11').innerHTML = num_9 && num_10;
            break; 
    case num_11 == '||':
            document.querySelector ('.out-11').innerHTML = num_9 || num_10;
            break;
    }
}



// document.querySelector('.b-11').onclick = f11;
// function f11(){
// let num_9 = +document.querySelector('.s-111').value;
// let num_10 = +document.querySelector('.s-112').value;
// let num_11 = document.querySelector('.s-113').value;

// let oyn_1 = document.querySelector ('.out-11');
  
//     if ( num_11 == '&&' ) {
//         oyn_1.innerHTML = num_9 && num_10;
//     }

//     else if ( num_11 == '||' ){
//         oyn_1.innerHTML = num_9 || num_10;
//     }
// }

// 1&&1 = 1
// 1&&0 = 0
// 0&&1 = 0
// 0&&0 = 0
// 1||1 = 1
// 1||0 = 1
// 0||1 = 1
// 0||0 = 0

// console.log('Андрей' && 'Андрей' == true); //false
// console.log(1 && 0 == true); // false
// console.log('2' && '2' == true ); // false
// console.log('4' && '1'); // true
// console.log(true && 'Gleb' ); // Gleb
// console.log(true && false ); // false
// console.log('Gleb' && true ); // true
// console.log(1 && '1'); 

let a = '200.1';


if ( true  && false) {
    console.log('Ok');
}

else {
    console.log('no');
}





