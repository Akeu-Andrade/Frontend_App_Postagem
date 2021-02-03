import React, {Component} from 'react';
import api from '../../services/api';
//import aauthHeader from '../../Servicos/auth-header';



export default class CratePost extends Component{
    
    async componentDidMount(){
        var a = aauthHeader();
        if(a === true){
            api.post(`/`, {
                titulo: 'teste API 19',
                autor: 'Akeu Andrade',
                data: '14-12-2020',
                texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
        }else {
            console.log(aauthHeader())
            console.log("Acesso negado!")
        }    
        
    }
    
    render(){
        return (
            <div>
                Hello mundo  
            </div>
        );
    }
}












function  aauthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    
      if (user && user.token) {
        if(user.token === null){
          return false;
        }else{
          console.log({Authorization: 'Bearer ' + user.token})
          return true;
        }
      }else{
        return false;
      }
  }