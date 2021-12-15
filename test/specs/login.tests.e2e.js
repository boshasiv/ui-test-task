const LoginPage = require('../pageobjects/login.page');
const MainPage = require('../pageobjects/main.page');
const SearchPage = require('../pageobjects/search.page');

describe('Fasion Constellate Login test', () => {
    it('should login with valid credentials', async () => {
        await MainPage.open();
        await MainPage.clickSignIn();

        await LoginPage.login('xohigeg992@macauvpn.com', 'Testpass1');
        message = await SearchPage.getSearchMessageText();
        await expect(message).toBe('Search for brands, labels, designers...');
    });
});
