

const Page = require('./page');


class LoginPage extends Page {

    get inputEmail() {
        return $('#edit-mail');
    }

    get inputPassword() {
        return $('#edit-pass');
    }

    get buttonLogin() {
        return $('#edit-submit');
    }

    async login (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
}

module.exports = new LoginPage();
