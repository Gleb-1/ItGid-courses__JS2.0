class Valid2 extends Valid {
  constructor(email, password) {
    super(email, password);
    this.emaiError = '';
    this.passwordError = '';
  }
  validate() {
    if (this.passwordValid.length >= 6) this.isValidValid = true;
    else this.passwordError = 'min length 6';

    if (this.emailValid.trim() == '') {
      this.emaiError = 'email empty';
      this.isValid = false;
    }
  }
}

let valid2 = new Valid2('', '1324');
valid2.validate();
console.log(valid2);

let valid3 = new Valid2('email@mail.ru', '13245678');
valid3.validate();
console.log(valid3);
