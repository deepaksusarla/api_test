'use strict';

process.env.NODE_ENV = 'test';

const Promise = require('bluebird');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.use(chaiHttp);

global.should = chai.should();
global.chai = chai;
