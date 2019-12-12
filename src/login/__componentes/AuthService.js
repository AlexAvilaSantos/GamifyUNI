import axios from 'axios';

//const USER_API_BASE_URL = 'http://localhost:8080/token/';
const USER_API_BASE_URL = 'https://api.myjson.com/bins/oti30';
class AuthService {

    login(credentials){
       // return axios.post(USER_API_BASE_URL,credentials);
       return axios.get(USER_API_BASE_URL);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("user"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer' + this.getUserInfo().token }};
    }

    logOut() {
        localStorage.removeItem("user");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();