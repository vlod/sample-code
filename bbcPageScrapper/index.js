/**
 * Pulls an article from a bbc page,
 * parse it using cheerio.js and output it
 */
const request = require('request-promise-native');
const cheerio = require('cheerio');

const REQ_PAGE = 'http://www.bbc.com/news/uk-england-shropshire-40374658';

const results = {body:[]};

// pull down page and process it with cheerio
request(REQ_PAGE)
  .then((body) => {

    // pull out the title
    const $ = cheerio.load(body);
    results.title = $('h1').text();

    $('.story-body__inner p').each(function(i, element){
      const el = $(this);
      results.body.push(`${el.text()}`);
    });
    console.log(JSON.stringify(results));
  })
  .catch((err) =>{
    throw (err);
  });
