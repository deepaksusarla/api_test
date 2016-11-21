
process.env.NODE_ENV = 'test';

import Promise from 'bluebird';
import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

global.Promise = Promise;
global.should = chai.should();
