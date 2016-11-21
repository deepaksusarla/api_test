/**
 * Created by Admin on 19/11/16.
 */
var rp = require('request-promise');
var querystring = require('querystring');

var RequestUtils;
RequestUtils = function () {

    /*
     * Returns response of the url
     * @param : url
     * @return : JSON response
     */

    this.getGETResponse = function (url,body) {

        var requestOpts = {
            encoding: 'utf8',
            url: url,
            method: 'GET'
        };
        return rp(requestOpts)
            .then(function(response) {
                return JSON.parse(response);
            })
            .catch(function(err) {
                throw err;
            });

    }
    this.getPOSTResponse = function (url,body) {
        console.log("body :", body)
        var requestOpts = {
            url: url,
            method: 'POST',
            // body:body,
            /*headers: {
                'Content-Type': 'application/json'
            },*/
            json: body
        };
        return rp(requestOpts)
            .then(function(response) {
                return JSON.parse(response);
            })
            .catch(function(err) {
                throw err;
            });

    }
    this.getPUTResponse = function () {

    }
    this.getDELTEResponse = function () {

    }
}
module.exports = RequestUtils;