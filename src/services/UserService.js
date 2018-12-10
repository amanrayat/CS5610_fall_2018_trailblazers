import axios from "axios";
const API_URL = "http://localhost:4000";

export default class UserService {

    static findAllUsers = () => {
        return axios.get(API_URL + "/api/user", {withCredentials: true});
    };

    static createUser = User => {
        return axios.post(API_URL + "/api/user", User, {withCredentials: true});
    };

    static registerUser = User => {
        return axios.post(API_URL + "/api/register", User, {withCredentials: true});
    };

    static logoutUser = () => {
        return axios.post(API_URL + "/api/logout", {}, {withCredentials: true});
    };

    static findUserById = UserId => {
        return axios.get(API_URL + "/api/user/" + UserId, {withCredentials: true});
    };

    static profile = () => {
        return axios.get(API_URL + "/api/profile", {withCredentials: true});
    };

    static login = User => {
        return axios.post(API_URL + "/api/login", User, {withCredentials: true});
    };

    static findUsersByAdmin = AdminId => {
        return axios.get(API_URL + "/api/admin/" + AdminId + "/users")
    };

    static deleteUserById = userId => {
        return axios.delete(API_URL + "/api/user/" + userId)
    };
    static findFollowersById = userId => {
        return axios.get(API_URL + "/api/user/"+userId+"/follower")
    };
    static findFollowingById = userId => {
        return axios.get(API_URL + "/api/user/"+userId+"/following")
    };
    static findCommentsById = userId => {
        return axios.get(API_URL + "/api/user/"+userId+"/recentcomment")
    };
    static findFavBeerById = userId => {
        return axios.get(API_URL + "/api/user/"+userId+"/like")
    };
    static updateUserById = (userId , User) => {
        return axios.put(API_URL + "/api/user/"+userId, User, {withCredentials: true});
    };

    static followerUser = (userId , followId) => {
        console.log(API_URL + "/api/user/"+userId+"/follow/"+followId);
        return axios.post(API_URL + "/api/user/"+userId+"/follow/"+followId, {},  {withCredentials: true});
    };
    static unFollowerUser = (userId , followId) => {
        return axios.delete(API_URL + "/api/user/"+userId+"/unfollow/"+followId,  {withCredentials: true});
    };

}