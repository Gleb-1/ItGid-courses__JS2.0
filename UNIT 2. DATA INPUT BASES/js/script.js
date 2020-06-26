
// task 1-------------------------
let a = 7;
let b = 9;
console.log(a*b);

// task 2-------------------------
let c = 7;
let d = 9;
document.querySelector('.out-2').innerHTML=(c/d);

// task 3-------------------------
let e = 3;
let f = 5;
document.querySelector('.out-3').innerHTML=(e+f);

// task 4-------------------------
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').innerHTML=(e1+f1);
//Разнеца в том что e1-это сторака

// task 5-------------------------
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').innerHTML=(e2/f2);//Infinity

// task 6-------------------------
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').innerHTML=(e3+f3);

// task 7-------------------------
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').innerHTML=(e4*f4);

// task 8-------------------------
document.querySelector('.inner');
document.querySelector('.b-8').onclick = function () {
    console.log(document.querySelector('.inner').value);
}

// task 9-------------------------
document.querySelector('.i-9');
document.querySelector('.b-9').onclick = function () {
document.querySelector('.out-9').innerHTML = (document.querySelector('.i-9').value);
document.querySelector('.i-9').value ='';
}

// task 10------------------------
document.querySelector('.i-101');
document.querySelector('.b-10').onclick = function () {
let b1 =+ document.querySelector('.i-101').value;
document.querySelector('.out-10').innerHTML = (b1*10);
document.querySelector('.i-101').value='';
}

// task 11------------------------
document.querySelector('.inner_in2');
document.querySelector('.b-11').onclick = function () {
let b1 = document.querySelector('.inner_in2').value;
document.querySelector('.out-11').innerHTML = (b1+10);
}

// task 12------------------------
document.querySelector('.inner_in3').onclick = function () {
    document.querySelector('.inner_in3').value=''; 
}
document.querySelector('.inner_in4').onclick = function () {
    document.querySelector('.inner_in4').value=''; 
}
document.querySelector('.but_5').onclick = function () {
let b3 = document.querySelector('.inner_in3').value;
let b4 = document.querySelector('.inner_in4').value;
    console.log('Hello' + ' ' + b3,b4);
document.querySelector('.inner_in3').value='';  
document.querySelector('.inner_in4').value='';
}

// task 13------------------------
document.querySelector('.inner_in5');
document.querySelector('.inner_in6');
document.querySelector('.but_6').onclick=function () {
let b5 = document.querySelector('.inner_in5').value;
let b6 = document.querySelector('.inner_in6').value;
document.querySelector('.out').innerHTML=(b5 + ',' + b6);
document.querySelector('.inner_in5').value='';
document.querySelector('.inner_in6').value='';
}

// task 14------------------------
document.querySelector('.inner_in7').value='Hello';

// task 15------------------------
let y = document.querySelector('.inner_in8');
y.style.border = '2px solid red'

// task 17------------------------
document.querySelector('.inner_in9');
document.querySelector('.but_7').onclick = function () {
let t = document.querySelector('.inner_in9').value;
t = parseInt(t);
console.log(t);
}

// task 18------------------------
document.querySelector('.inner_in10');
document.querySelector('.but_8').onclick = function () {
let t1 = document.querySelector('.inner_in10').value;
t1 = parseFloat(t1);
console.log(t1);
}

// task 19------------------------
document.querySelector('.inner_in11');
document.querySelector('.inner_in12');
let q = document.querySelector('.out1');
document.querySelector('.but_9').onclick = function () {
let t2 = document.querySelector('.inner_in11').value;
t2 = parseInt(t2);
let t3 = document.querySelector('.inner_in12').value;
t3 = parseInt(t3);
q.innerHTML=(t2+t3);
}

// task 20------------------------
document.querySelector('.inner_in13').onclick = function () {
    document.querySelector('.inner_in13').value = '';
}
document.querySelector('.inner_in14').onclick = function () {
    document.querySelector('.inner_in14').value = '';
}
document.querySelector('.inner_in15').onclick = function () {
    document.querySelector('.inner_in15').value = '';
}
document.querySelector('.inner_in16').onclick = function () {
    document.querySelector('.inner_in16').value = '';
}
document.querySelector('.out2');
document.querySelector('.but_10').onclick = function () {
let t4 = document.querySelector('.inner_in13').value;
let t5 = document.querySelector('.inner_in14').value;
let t6 = document.querySelector('.inner_in15').value;
let t7 = document.querySelector('.inner_in16').value;
document.querySelector('.out2').innerHTML = `Уважаемый ${t4} ${t5} ваш возраст ${t6} года професси вы ${t7} `;
}

//('Уважаемый ' + t4 + t5 + 'ваш возраст ' + t6 + 'года ' + 'по' + ' ' + 'професси ' + 'вы ' + t7);




















