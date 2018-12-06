import axios from "axios";
const API_URL = "https://java-server-assignment6.herokuapp.com";

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

}