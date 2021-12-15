const Page = require('./page');

class SearchPage extends Page {
  get searchMessage() {
    return $('#edit-search-api-fulltext');
  }

  async getSearchMessageText() {
    return await this.searchMessage.getAttribute('placeholder');
  }
}

module.exports = new SearchPage()
