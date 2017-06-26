/**
 * Pulls an article from a bbc page,
 * parse it using cheerio.js and output it
 */
const request = require('request-promise-native');
const cheerio = require('cheerio');

module.exports = {
  getPage(url) {
    // pull down page and process it with cheerio
    return request(url)
      .then((body) => {
        // pull out the title
        const $ = cheerio.load(body);
        const results = {
          title: $('h1').text(),
          body: [],
        }

        // pull out all the paragraphs
        $('.story-body__inner p').each(function(i, element){
          const elText = $(this).text().trim();
          results.body.push(elText);
        });
        return results;
      })
      .catch((err) =>{
        throw (err);
      });
  },
};
