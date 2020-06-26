class Goods {
  constructor(name, amount, image, count) {
    this.nameGoods = name;
    this.amountGoods = amount;
    this.imageGoods = image;
    this.countGoods = count;
  }
  draw(elem) {
    document.querySelector(elem).innerHTML += `
    <table>
      <thead>
        <tr>
          <td>image</td>
          <td>name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="${this.imageGoods}" style = 'width = 30px;'height  = 30px;'></td>
          <td>${this.nameGoods}</td>
          <td>${this.amountGoods}</td>
        </tr>
      </tbody>
    </table>
    `;
  }
}
let m = new Goods();
console.log(m);
let goods2 = new Goods('apple', 12, './img/fruit_apple-128.png', 10);
console.log(goods2);
