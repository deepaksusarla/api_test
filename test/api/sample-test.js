import chai, {expect} from 'chai';
import {API, API_URLS} from '../config';
import locationData from '../api-data/locations';
import {deepak as loginCreds} from '../api-data/login-creds';

const chaiHttp = chai.request(API);

describe('Sample test suite', () => {

  before(() => {
    console.log('----- before the suite -----');
  });

  after(() => {
    console.log('----- after the suite -----');
  });

  it('dumps location data', async() => {
    const res = await chaiHttp.get(API_URLS.LOCATION);
    const {body} = res;
    expect(body).to.deep.equal(locationData);
  });

  it('logs in using email/password', async() => {
    const res = await chaiHttp.post(API_URLS.LOGIN)
      .send(loginCreds);
    const { body } = res;
    expect(body.user.id).to.equal(13673);
  });

});
