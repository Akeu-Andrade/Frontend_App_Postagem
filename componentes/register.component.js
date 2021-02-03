import React, { Component } from "react";
import AuthService from "../Servicos/auth.service";


export default class registrar extends Component {
    render() {
        AuthService.register().then(()=>{
            console.log("Registrado")
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