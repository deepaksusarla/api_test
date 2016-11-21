/**
 * Created by Admin on 25/10/16.
 */
var request = require('supertest');
var express = require('express');
var utils = require("../Tests/supertest1.js");
/*
describe('API testing', function () {
    console.log("describe");

    it('Location API', function () {
        console.log("it");
        utils.test_api()

    },10000);
},10000);*/

/*describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function (done) {
        utils.test_api(function(response){
            console.log(response.status);
            console.log(response.body);

            done();
        });


    });
});*/
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