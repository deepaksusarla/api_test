/**
 * Created by Admin on 19/11/16.
 */
var requestUtils= require('../API_Utils/RequestUtils.js');
var constants=require('../API_Utils/API_URLS.js');
var requestUtils= new requestUtils();
var urls= new constants();

getCityId= function (url,cityName) {
    return requestUtils.getGETResponse(url)
        .then(function (response) {
            for(var i=0;i<response.length;i++){
                if(response[i].name===cityName){
                    return response[i].id;
                }


            }
        });

}
module.exports.getCityId = getCityId;


getCityName= function (url,cityId) {
    return requestUtils.getGETResponse(url)
        .then(function (response) {
            for(var i=0;i<response.length;i++){
                if(response[i].id===cityId){
                    return response[i].name;
                }


            }
        });

}
module.exports.getCityId = getCityId;