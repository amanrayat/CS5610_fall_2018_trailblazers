import axios from 'axios';
const API_URL = "https://boiling-ocean-17135.herokuapp.com";
// const API_URL = "http://localhost:4000";

export default class BreweryServices{
    static createBrewery = Brewery => {
        console.log(Brewery);
        return axios.post(API_URL + "/api/brewery", Brewery, {withCredentials: true}).then((res) => res.data)
    };

    static getEventsByBrewery = BreweryId => {
        return axios.get(API_URL + "/api/brewery/" + BreweryId + "/event", {withCredentials: true}).then((res) => res.data)
    };

    static createEvent = (epId, event) => {
        return axios.post(API_URL + "/api/eventplanner/" + epId + "/event", event, {withCredentials: true}).then((res) => res.data)
    }

    static deleteEvent = (epId) => {
        return axios.delete(API_URL + "/api/event/" + epId , {withCredentials: true}).then((res) => res.data)
    }
}