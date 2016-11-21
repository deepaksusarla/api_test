/**
 * Created by Admin on 09/11/16.
 */
var supertest = require('supertest');
var api = supertest('https://www.node.rentomojo.com/api');
var rp = require('request-promise');
// var querystring = require('querystring');
var constants=require('../API_Utils/API_URLS.js')
var urls= new constants();
test_api= function(){

    //var url='http://test-staging.rentomojo.com/api/Locations';
    var requestOpts = {
     //encoding: 'utf8',
     url: 'https://www.rentomojo.com/api/Locations',
     method: 'GET'
     /*body: querystring.stringify({
     client_id: 'Subtitles',
     client_secret: 'Xv2Oae6Vki4CnYcSF1SxSSBtO1x4rX47zhLUE/OqVds=',
     scope: 'http://api.microsofttranslator.com',
     grant_type: 'client_credentials'
     })*/
     };
    return rp(requestOpts)
        .then(function(response) {
            console.log('urls :'+urls.LOCATION_API);
            console.log("rp")
            console.log(response)
            return response;
        })
        .catch(function(err) {
            console.log('statusCode', err.response.statusCode);
            //console.log(JSON.parse(err));
           throw err;
        });


}
module.exports.test_api=test_api;
/*
describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function (done) {
        api
            .get('/Locations')
            .end(function (err,response) {
                console.log(response.body);
                done();
            });
    });
});*/


/*return  api
 .get('/Locations')
 .end(function (err,response) {
 callback(response);

 });*/




/*var requestOpts = {
 //encoding: 'utf8',
 url: 'https://www.node.rentomojo.com/api/Locations',
 method: 'GET'
 /!*body: querystring.stringify({
 client_id: 'Subtitles',
 client_secret: 'Xv2Oae6Vki4CnYcSF1SxSSBtO1x4rX47zhLUE/OqVds=',
 scope: 'http://api.microsofttranslator.com',
 grant_type: 'client_credentials'
 })*!/
 };*/
