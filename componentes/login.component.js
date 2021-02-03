import React, { Component } from "react";
import AuthService from "../Servicos/auth.service";


export default class Login extends Component {
    render() {
        AuthService.login().then(()=>{
            console.log("Logado")
            console.log(Response)
            
        },
        error => {
            console.log(Response)
        });
        return (
            <button >
                Loginn 
            </button>
        );
    }
    
        
}