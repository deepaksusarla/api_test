/**
 * Created by Admin on 09/11/16.
 */
var utils = require("../Tests/supertest1.js");
var assert = require('assert');
var chakram= require('/usr/local/lib/node_modules/chakram/lib/chakram.js');
expect = chakram.expect;
/*
describe('API testing', function () {
    console.log("describe");

    it('Location API', function () {
        console.log("it");
        var request = require('request');
        request('http://www.google.com', function (error, response, body) {
            console.log(error)
            if (!error && response.statusCode == 200) {
                console.log("jjlsdfa")
                console.log(body) // Show the HTML for the Google homepage.
            }
        })

    });
});*/
/*describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function () {
       // var response = chakram.get("https://www.rentomojo.com/api/Locations");
      return  chakram.get("https://www.node.rentomojo.com/api/Locations").then(function (respObj) {
           console.log(respObj.response.statusCode);
          console.log(respObj.response.body);
       })
        /!*expect(response).to.have.status(200);
        expect(response).to.have.header("content-type", "application/json");
        expect(response).not.to.be.encoded.with.gzip;
        expect(response).to.comprise.of.json({
            args: { test: "chakram" }
        });*!/

       return chakram.wait();
        //done();
    });
});*/
/*
describe('API testing', function () {
    console.log("describe");

    it('Location API', function () {
        console.log("it");
        utils.test_api('sadfsadf)
        .then((err, res) => {

        })
      var res=  utils.test_api("https://www.node.rentomojo.com/api/Locations",data)
        expect(res.status).to(200);
    },10000);
},10000);*/
describe('API testing', function () {
    console.log("describe");

    it('Location API', function () {
        console.log("it");
       return utils.test_api()
           .then(function (res) {
           console.log(res)
       }).catch(function (err) {
           console.log('statusCode :', err.response.statusCode);
       })
    });
});