const nock = require('nock');
const expect = require('chai').expect;
const scraper = require('../main');

describe('routes', () => {
  // stub http lookup
  nock('http://www.bbc.com/')
    .get('/news/uk-england-shropshire-40374658')
    .replyWithFile(200, `${__dirname}/bbcFixture.html`);

  it('should return correct details for page', (done) => {
    scraper.getPage('http://www.bbc.com/news/uk-england-shropshire-40374658')
      .then((results) => {
        expect(results.title).equal('Farming robots get to grips with weeding at Harper Adams');

        expect(results.body.length).equal(13);
        expect(results.body[0]).equal('Researchers at Harper Adams University in Shropshire are trying to sow, look after and then harvest a field of barley using only robots and autonomous vehicles. No humans are allowed into the pilot-plot at all.');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
