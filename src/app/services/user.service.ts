import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }


    saveUser(){

      sessionStorage.setItem('heatmap_tjx_isLoggedIn',  'true');
    }
    getUser(){
       return sessionStorage.getItem('heatmap_tjx_isLoggedIn');
  }
       clearUser(){
        sessionStorage.removeItem('heatmap_tjx_isLoggedIn');
     
  }
  
  

}
