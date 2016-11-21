/**
 * Created by Admin on 19/11/16.
 */
var requestUtils= require('../API_Utils/RequestUtils.js');
var api_urls=require('../API_Utils/API_URLS.js');
var locationData=require('../TestData/Locations.json');
var LoginCredentialsData=require('../TestData/LoginCredentials.json');
var utils=require('../API_Utils/Utils.js')
var chai= require('chai');
var requestUtils= new requestUtils();
var api_urls= new api_urls();
var assert = chai.assert;
describe('API testing', function () {
    console.log("describe");

    it('Location API', function () {
        return requestUtils.getGETResponse(api_urls.LOCATION_API)
            .then(function (response) {
                for(var i=0;i<response.length;i++){
                    assert.equal(locationData.locations[i].slug,response[i].slug,"Slug name is not equal")
                    assert.equal(locationData.locations[i].name,response[i].name,"City name is not equal")
                    assert.equal(locationData.locations[i].contactEmail,response[i].contactEmail,"City contactEmail is not equal")
                    assert.equal(locationData.locations[i].contactNumer,response[i].contactNumer,"City contactNumer is not equal")
                    assert.equal(locationData.locations[i].icon,response[i].icon,"City icon url is not equal")
                    assert.equal(locationData.locations[i].id,response[i].id,"City id is not equal")
                    assert.equal(locationData.locations[i].jotFormLink,response[i].jotFormLink,"City jotFormLink is not equal")
                    assert.equal(locationData.locations[i].public,response[i].public,"City "+response[i].name+" is not public")
                    if(locationData.locations[i].subCities!=null){
                        //assert.equal(locationData.locations[i].subCities.toString(),response[i].subCities.toString(),"For city '"+response[i].name+"' Sub City names are not equal")
                        assert.deepEqual(locationData.locations[i].subCities,response[i].subCities,"For city '"+response[i].name+"' Sub City names are not equal")
                    }

                    assert.equal(locationData.locations[i].active,response[i].active,"City "+response[i].name+" is not active")
                }
            })

    });
    it('Login API', function () {
        return requestUtils.getPOSTResponse(api_urls.LOGIN,LoginCredentialsData.Login)
            .then(function (response) {
                console.log("Login response :"+JSON.stringify(response));
            })

    });
});