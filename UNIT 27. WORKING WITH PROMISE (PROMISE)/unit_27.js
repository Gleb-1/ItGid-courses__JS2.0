// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

document.querySelector('.b-1').onclick = function () {
  let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1').then(function (data) {
      //   console.log(data.text());
      resolve(data.text());
    });
  });
  let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Gleb').then(function (data) {
      resolve(data.text());
    });
  });
  Promise.all([a, b]).then(function (value) {
    document.querySelector('.out-1').innerHTML = value;
    console.log(value);
  });
};

// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>
*/
document.querySelector('.b-2').onclick = function () {
  let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&nu1=10&num2=20').then(function (data) {
      resolve(data.text());
    });
  });
  let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&nu1=10&num2=20').then(function (data) {
      resolve(data.text());
    });
  });
  Promise.all([a, b]).then((value) => {
    document.querySelector('.out-2').innerHTML = value;
  });
};

// ваше событие здесь!!!

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

document.querySelector('.b-3').onclick = function () {
  let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5').then((data) => resolve(data.text()));
  });
  let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&nu1=10&num2=20').then((data) => resolve(data.text()));
  });
  Promise.all([a, b]).then((value) => {
    document.querySelector('.out-3').innerHTML = value;
  });
};

// ваше событие здесь!!!

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

document.querySelector('.b-4').onclick = function () {
  let a = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7').then(function (data) {
      resolve(data.text());
    });
  });
  let b = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1991').then(function (data) {
      resolve(data.text());
    });
  });
  Promise.all([a, b]).then(function (value) {
    document.querySelector('.out-4').innerHTML = value;
  });
};

// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

document.querySelector('.b-5').onclick = function () {
  let a = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=1',
    }).then(function (data) {
      resolve(data.text());
    });
  });
  let b = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=2&name=Gleb',
    }).then(function (data) {
      resolve(data.text());
    });
  });
  Promise.all([a, b]).then(function (value) {
    document.querySelector('.out-5').innerHTML = value;
    // console.log(value[0]);
  });
};

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

document.querySelector('.b-6').onclick = function () {
  let a = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=3&nu1=10&num2=20',
    }).then((data) => {
      resolve(data.text());
    });
  });
  let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=4&nu1=10&num2=20',
    }).then((data) => {
      resolve(data.text());
    });
  });
  Promise.all([a, b]).then((value) => {
    document.querySelector('.out-6').innerHTML = value;
  });
};

// ваше событие здесь!!!

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

document.querySelector('.b-7').onclick = function () {
  let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=5',
    }).then((data) => resolve(data.text()));
  });
  let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=6&nu1=10&num2=20',
    }).then((data) => resolve(data.text()));
  });
  Promise.all([a, b]).then((value) => {
    document.querySelector('.out-7').innerHTML = value;
  });
};

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

document.querySelector('.b-8').onclick = function () {
  let a = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=7',
    }).then(function (data) {
      resolve(data.text());
    });
  });
  let b = new Promise(function (resolve, reject) {
    fetch('http://getpost.itgid.info/index2.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'auth=5ADcB96BA48d3f80&action=8&year=1991',
    }).then(function (data) {
      resolve(data.text());
    });
  });
  Promise.all([a, b]).then(function (value) {
    document.querySelector('.out-8').innerHTML = value;
    // console.log(value[0]);
  });
};

// ваше событие здесь!!!
