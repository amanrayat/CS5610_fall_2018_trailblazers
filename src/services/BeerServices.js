import axios from 'axios';
// const API_URL = "https://boiling-ocean-17135.herokuapp.com";
const API_URL = "http://localhost:4000";

export default class BeerServices{

    static createBeer = Beer => {
        return axios.post(API_URL + "/api/beer", Beer, {withCredentials: true}).then((res) => res.data)
    };

    static findComments = (userId) => {
        if(!userId){
            return axios.get(API_URL + "/api/allComments", {withCredentials: true}).then((res) => res.data);
        }
    };

    static findCommentsForBeerId = beerId => {
        return axios.get(API_URL + "/api/beer/" + beerId + "/comment", {withCredentials: true}).then((res) => res.data)
    };

    static addCommentForBeerId = (comment, userId, beerId) => {
        let commentJson = {
            comment: comment
        };
        return axios.post(API_URL + "/api/user/" + userId + "/beer/" + beerId + "/comment", commentJson, {withCredentials: true}).then((res) => res.data)
    };

    static deleteCommentForBeerId = ( beerId, commentId) => {

        return axios.delete(API_URL + "/api/beer/" + beerId + "/comment/" + commentId ,  {withCredentials: true}).then((res) => res.data)
    };
    static updateCommentForBeerId = ( beerId, commentId , comment ) => {
        console.log("the beer is " , beerId , commentId , comment)
        return axios.put(API_URL + "/api/beer/" + beerId + "/comment/" + commentId , comment ,  {withCredentials: true}).then((res) => res.data)
    };

// /api/beer/:beerId/comment
    static addLike = (userId, beerId) => {
        return axios.post(API_URL + "/api/user/" + userId + "/beer/" + beerId + "/like", {}, {withCredentials: true}).then((res) => res.data)
    };

    static findTotalLikes = (beerId) => {
        return axios.get(API_URL + "/api/beer/"+beerId + "/like", {withCredentials: true}).then((res) => res.data);
    }
}