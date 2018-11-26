import axios from 'axios';

let API_endpoint = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/";
let dummApi = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/";
let key = "7e70f5b6c3c89099e349e899da3bae1e";
let dummyKey = "21ed24bf7af4b64476155e7902e27d5e";
let format = "json&withBreweries=N&withSocialAccounts=N&withLocations=Y&withIngredients=N&p=1";
let dummyFormat = "json&withBreweries=Y&withLocations=N&withAlternateNames=N&withIngredients=N&p=1";

export default class BeereweryServices{

    static search(query){
        let url = API_endpoint + 'search?q=' + query + '&key=' + key + "&format=" + format;
        console.log(url);
        return axios.get(url, {crossdomain: true}).then((res) => res.data)
    }


    static getBeer(beerId){

        let url = API_endpoint + 'beer/' + beerId +'?key=7e70f5b6c3c89099e349e899da3bae1e&withBreweries=Y&withIngredients=Y';
        console.log(url);
        return axios.get(url, {crossdomain: true}).then((res) => res.data)
    }
}

//https://sandbox-api.brewerydb.com/v2/search?q=Wheat&key=21ed24bf7af4b64476155e7902e27d5e&format=json&withBreweries=Y&withLocations=N&withAlternateNames=N&withIngredients=N&p=1
//https://sandbox-api.brewerydb.com/v2/search?q=wheat&key=21ed24bf7af4b64476155e7902e27d5e&format=json&withBreweries=Y&withLocations=N&withAlternateNames=N&withIngredients=N&p=1
