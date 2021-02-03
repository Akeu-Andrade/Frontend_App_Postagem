import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://10.0.0.16:8080';

class UserService {

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

}

export default new UserService();