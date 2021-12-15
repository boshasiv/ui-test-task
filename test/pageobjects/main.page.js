const Page = require('./page');

class MainPage extends Page {

  get signInButton() {
    return $('a[href="/user/login"]');
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  open() {
      return super.open('');
  }

}

module.exports = new MainPage()
