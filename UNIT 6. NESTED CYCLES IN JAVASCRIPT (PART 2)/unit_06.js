//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out = '';
        for ( let i = 0; i < 3; i++ ) {
            for ( let k = 0; k < 3; k++ ) {
                out += '*';
            }
            out += '_'
        }
        document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

function t2() {
    let out = '';
    for ( let i = 1; i <= 3; i++ ) {
        out += '<br>' + i + '<br>';
        for ( let k = 0; k < 3; k++ ) {
            out += '*_';
        }
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

function t3() {
    let out = '';
    for ( let i = 0; i < 3; i++ ) {
        for ( let k = 0; k < 3; k++ ) {
            out += '*_';
        }
        out += '<br>';
    }
    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
    let out = '';
    for ( let i = 1; i <= 3; i++ ) {
        out += i + '_';
        for ( let k = 1; k <= 5; k++ ) {
            out += k + ' ';
        }
    }
    document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>

function t5() {
    let out = '';
    for ( let i = 0; i < 3; i++ ) {
        for ( let k = 0; k < 6; k++ ) {
           if ( k % 2 == 0 ) out += 1;
           else out += 0;
        }
        out += '<br>';
    }
    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    let out = '';
    for ( let i = 0; i < 3; i++ ) {
        for ( let k = 1; k <= 6; k++ ) {
            if ( k % 3 == 0 ) out += 'x';
            else if ( k % 2 == 0 ) out += 0;
            else out += 1;
        }
        out += '<br>'
    }
    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

function t7() {
    let out = '';
    for ( let i = 0; i <= 4; i++ ) {
        for ( let k = 0; k < i; k++ ) {
            out += '*';
        }
        out += '<br>';
    }
    document.querySelector('.out-7').innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

function t8() {
    let out = '';
    for ( let i = 5; i >= 0; i-- ) {
        for ( let k = 0; k < i; k++ ) {
            out += '*';
        }
        out += '<br>';
    }
    document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

function t9() {
    let out = '';
    for ( let i = 0; i <= 6; i++ ) {
        for ( let k = 1; k < i; k++ ) {
            out += k + ' ';
        }
        out += '<br>';
    }
    document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

function t10() {
    let out = '';
    for ( let i = 0; i < 5; i++ ) {
        for ( let k = 1; k <= 9; k++ ) {
            out +=  i + '' + k+ ' ';
        }
        out += i + 1 + '0' + '<br>';
    }
    document.querySelector('.out-10').innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;


// Task 11
	
// С помощью вложенных циклов и символа * нарисуйте:

//      *****
//     *****
//    *****

let cont = 3;
let cont1 = 7;

function t11() {
    let out = '';
    let i = 0;
    while (  i < 3 ) {
        let k = 0;
        while (  k < 10 ) {
            if ( k < cont || k > cont1 ) {
                out += '&nbsp'
            }
            else {
                out += '* '
            }
            k++;
        }
        i++;
        out += '<br>';
        cont--;
        cont1--;
    }
    return out;

}
document.querySelector('.out-11').innerHTML = t11();



// Task 12 
// С помощью вложенных циклов и символа * нарисуйте:

//    *
//    **
//    ***
//    **
//    *

let cont2 = 4;
let cont3 = 0;

function t12() {
let out = '';
    let i = 0;
    while ( i < 5 ) {
    out += '<br>';
    i++;
        let k = 0;
        while ( k < 5 ) {
        if ( k > cont2 || k > cont3 ) out += '&nbsp';
        else out += '*';
          k++;
        }
    cont2--;
    cont3++;
    }
    return out;
}
document.querySelector('.out-12').innerHTML = t12();



// task 13
// С помощью вложенных циклов и символа * нарисуйте:

// 	******
// 	*       *
// 	*       *
// 	*       *
//  ******

function t13() {
let out = '';
    let i = 0;
    while ( i < 5 ) {
    out += '<br>' + '*';
    i++;
        let k = 0;
        while ( k < 5 ) {
            if ( i == 1 || i == 5 ) out += '*';
            else out += '&nbsp&nbsp';
            k++;
        } 
        out += '*';
    }

return out;
}

document.querySelector('.out-13').innerHTML = t13();

// task  14

let cont4 = 6;

function t14() {
let out = '';
    let i = 0;
        while ( i < 7 ) {
        out += '<br>';
        i++;
            let k = 0;
            while ( k < 5 ) {
                if ( k < cont4  ) out += '&nbsp';   
                else out += '*' + ' ';
                    k++;
            }
        cont4--;
        }
return out;
}

document.querySelector('.out-14').innerHTML = t14();



// task  15
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

function t15() {
let out = '';
    let i = 6;
    while ( i > 1 ) {
        out += '<br>';
        i--;
            let k = i;
            while ( k > 0 ) {
                out += k + ' ';
                k--;
            }
    }
return out;
}

document.querySelector('.out-15').innerHTML = t15();

// let out = '';
//     for ( let i = 5; i > 0; i-- ) {
//         out += '<br>';
//         for ( let k = i; k >= 1; k-- ) {
//             out += k + ' ';
//         }
//     }
// return out;
// }


// Task 16
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1



let cont6 = 1;

function t16() {
let out = '';


    for ( let i = 1; i < 6; i++ ) {

        console.log('начало итерации =========');
        console.log('i равна ' + i );
        console.log('----------');
        out += '<br>';


        for ( let k = 5; k >= 1; k-- ) {
        console.log('зашли во внутрений цикл');
        console.log('k равна ' + k);
            if ( k > i ) {
                console.log('=================================');
                console.log('если k > i ' +  'i равна ' + i);
                console.log(k > i );
                console.log('ставим &nbsp&nbsp&nbsp');
                out += '&nbsp&nbsp&nbsp';
            } 
            else {
            console.log('----------------------------------------------------------');
            console.log(k > i);
            console.log('иначе выводим k ' + 'которая равна: ' + k);
            out += k + ' ';
            }
            console.log('вышли с внутренего цикла');
        }


        console.log('конец итерации =========');
    }

return out;
}
document.querySelector('.b-16').onclick = () => {
    document.querySelector('.out-16').innerHTML = t16();
}



// Task 17	
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1


function t18() {
let out = '';
    for ( let i = 1; i < 6; i++ ) {
        out += '<br>';
        for ( let k = 5; k >= 1; k-- ) {
        if ( k > i )  out +=  'X ';
        else  out += k + ' ';
        }
    }
return out;
}

document.querySelector('.out-18').innerHTML = t18();



// Task 19 
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:

//   1
//   2  2
//   3  3  3
//   4  4  4  4
//   5  5  5  5  5

function t19() {
let out = '';
    for ( let i = 1; i <= 5; i++ ) {
        out += '<br>';
        for ( let k = 1; k <= i; k++ ) {
            out += i + ' ';
        }
    }
return out;
}
document.querySelector('.out-19').innerHTML = t19();

// Task 20 
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):

//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1



function t20() {
let out = '';
    for ( let i = 5; i >= 1; i-- ) {
        out += '<br>';
        for ( let k = i; k <= 5; k++ ) {
          if ( i % 2 == 0 )  out += 'x' + ' ';
          else out += i + ' ';
        }
    }
return out;
}

document.querySelector('.out-20').innerHTML = t20();



// Task 21 
// С помощью вложенных циклов и символа * нарисуйте:

//      *****
//     *******
//    *********

let left = 3;
let right = 7;

function t21() {
let out = '';
    for ( let i = 0; i < 3; i++ ) {
        out += '<br>'
        for ( let k = 1; k <= 10; k++ ) {
            if (  k < left || k > right )   out += '&nbsp';
            else out += '*';
        }
        left--;
        right++;
    }

return out;
}
document.querySelector('.out-21').innerHTML = t21();


// Task 22 
// С помощью вложенных циклов и символа * нарисуйте:

//      **
//     ****
//    ******
//     ****
//      **


let topl = 10;
let topr = 11;

let botl = 6;
let botr = 15;


function t22() {
let out = '';
    for ( let i = 0; i < 5; i++ ) {
        out += '<br>';
        for ( let k = 0; k < 30; k++ ) {
           if ( i == 0 || i == 1 || i == 2 ) {
               if ( k < topl || k > topr ) out += '&nbsp';
               else out += '*'
           }
           else if ( i == 3 || i == 4 || i == 5 ) {
               if ( k < botl || k > botr ) out += '&nbsp';
               else out += '*';
           }
        }  
         topl--;
         topr++;

         botl++;
         botr--;
    }

return out;
}

document.querySelector('.out-22').innerHTML = t22();

