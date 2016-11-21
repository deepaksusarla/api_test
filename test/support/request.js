'use strict';

/** Useless: This file is not used anywhere **/

const rp = require('request-promise');

class Request {

  /**
   * Fires a get request
   * @param options Request options
   * @param {string} options.url URL to hit
   * @param {Object} options.qs Query string
   * @param {Object} options.headers Headers to pass
   * @returns Promise.<Object>
   */
  static get(/* {url, qs, headers} */ options) {
    Object.assign(options, {
      method: 'GET',
      json: true
    });
    return rp(options);
  }

  /**
   * Fires a post request
   * @param options Request options
   * @param {string} options.url URL to hit
   * @param {Object} options.json JSON body
   * @param {Object} options.headers Headers to pass
   * @returns Promise.<Object>
   */
  static post(/* {url, json, headers} */ options) {
    Object.assign(options, {
      method: 'POST'
    });
    return rp(options);
  }

}

module.exports = Request;