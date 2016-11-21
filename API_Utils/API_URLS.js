/**
 * Created by Admin on 19/11/16.
 */

var api_urls;



api_urls = function () {
    this.BASE_URL = "https://www.rentomojo.com";
    this.API = this.BASE_URL+"/api/";
    this.LOCATION_API = this.API + "Locations";
    this.LOGIN=this.API+"RMUsers/rmlogin?include=user";
}
module.exports = api_urls;