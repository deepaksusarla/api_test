'use strict';

const config = {};

config.BASE_URL = process.env.BASE_URL || 'https://www.rentomojo.com';
config.API = `${config.BASE_URL}/api`;

config.API_URLS = {
  LOCATION: '/locations',
  LOGIN: '/RMUsers/rmlogin?include=user'
};

module.exports = config;
