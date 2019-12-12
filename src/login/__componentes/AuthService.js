import axios from 'axios';

//const USER_API_BASE_URL = 'http://localhost:8080/token/';
const USER_API_BASE_URL = 'http://localhost:8080/loginUser';
class AuthService {

    login(credentials){
        return axios.post(USER_API_BASE_URL, credentials);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();