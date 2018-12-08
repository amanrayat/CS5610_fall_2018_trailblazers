import axios from 'axios';

let API_endpoint = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/";
let dummApi = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/";

let key = "7e70f5b6c3c89099e349e899da3bae1e";
let dummyKey = "21ed24bf7af4b64476155e7902e27d5e";

let beerFormat = "json&type=beer&withSocialAccounts=N&withLocations=Y&withIngredients=N&p=";
let dummyBeerFormat = "json&type=beer&withLocations=N&withAlternateNames=N&withIngredients=N&p=";

let breweryFormat = "json&type=brewery&withSocialAccounts=N&withLocations=Y&withIngredients=N&p=";
let dummyBreweryFormat = "json&type=brewery&withLocations=N&withAlternateNames=N&withIngredients=N&p=";

let beerDetailFormat = '&withLocations=Y&withSocialAccounts=Y';

export default class BeereweryServices{

    static searchBeer(query, pageNo){
        let url = dummApi + 'search?q=' + query + '&key=' + dummyKey + "&format=" + beerFormat + pageNo;
        console.log(url);
        return axios.get(url).then((res) => res.data)
    }

    static searchBrewery(query, pageNo){
        let url = API_endpoint + 'search?q=' + query + '&key=' + key + "&format=" + breweryFormat + pageNo;
        console.log(url);
        return axios.get(url).then((res) => res.data)
    }


    static getBeer(beerId){

        let url = API_endpoint + 'beer/' + beerId +'?key=' + dummyKey + beerDetailFormat;
        console.log(url);
        return axios.get(url).then((res) => res.data)
    }

    static getBrewery(breweryId){
        let url = API_endpoint + 'brewery/' + breweryId +'?key=' + key + beerDetailFormat;
        console.log(url);
        return axios.get(url).then((res) => res.data)
    }
}
