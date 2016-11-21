'use strict';

const config = require('../config');
const chaiHttp = chai.request(config.API);

const locationData = require('../api-data/Locations.js');

describe('Sample test suite', () => {

  before(() => {
    console.log('----- before the suite -----');
  });

  after(() => {
    console.log('----- after the suite -----');
  });

  it('dumps location data', () => {
    return chaiHttp.get(config.API_URLS.LOCATION)
      .then(res => res.body)
      .should.eventually.deep.equal(locationData);
  });

  it('logs in using email/password', () => {
    return chaiHttp.post(config.API_URLS.LOGIN)
      .send({
        mobileOrEmail: 'deepak.susarla@rentomojo.com',
        password: 'abcd1234'
      })
      .then(res => res.body)
      .then(body => body.user.id.should.equal(13673));
  });

});
