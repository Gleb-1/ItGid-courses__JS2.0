class Valid {
  constructor(email, password) {
    this.emailValid = email;
    this.passwordValid = password;
    this.isValidValid = false;
  }
  validate() {
    if (this.passwordValid.length >= 6) this.isValidValid = true;
  }
}

let validData = new Valid('email@mail.ru', '12345678');
validData.validate();
console.log(validData.isValidValid);

let validData2 = new Valid('email@mail.ru', '12345');
validData.validate();
console.log(validData2.isValidValid);
