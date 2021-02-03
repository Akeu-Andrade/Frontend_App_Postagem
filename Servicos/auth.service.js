import React, {Component} from 'react';
import api from '../services/api';


class AuthService extends Component{
    login (/*aqui passa os parametros*/){
            return api.post(`/entrar`, {
            email: 'akeusantana200@gmail.com',
            senha: '123'
        })
        .then(response => {
            if (response.data.token) {
                console.log("oi")
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log(response.data.token)
            return response.data;
        })
        .catch(function(error){
            console.log(error);
        });
    }

    logout(){
        localStorage.removeItem("user");
    }

    register() {
        return api.post(`/user`, {
          nome: "Akeu200",
          email: "akeusantana200@gmail.com",
          senha: "123"
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    } 

}

export default new AuthService();