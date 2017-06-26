
const main = require('./main');
const REQ_PAGE = 'http://www.bbc.com/news/uk-england-shropshire-40374658';

// pull down the page
main.getPage(REQ_PAGE)
  .then((results) => {
    console.log(JSON.stringify(results));
  })
  .catch((err) => {
    throw err;
  });

