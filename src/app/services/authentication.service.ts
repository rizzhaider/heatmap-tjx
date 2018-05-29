import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
// const httpOptions = {
//                   headers: new HttpHeaders({
//                     'Content-Type': 'application/json',
//                     'Authorization':  'Basic '+btoa('hughes:hughes')
//                   })
//                 };

@Injectable()
export class AuthenticationService {
  
  constructor(private http:Http, 
               private userService : UserService) { 
               }

               createAuthorizationHeader(headers: Headers) {
                headers.append('Content-Type', 'application/json',); 
                headers.append('Authorization', 'Basic ' + btoa('hughes:hughes')); 
              }
            
  private baseUrl = environment.baseURL;
  private loginUrl = this.baseUrl + '/tjx/heatmap-authentication';
  

  login(username: string, password:string){
    const _mdPassword = Md5.hashStr(password);
       let authObject = {
       userName: username,
       password:_mdPassword,
       state:"login"
      };
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    //let options = new RequestOptions({ headers: httpOptions });
     return this.http.post(this.loginUrl, JSON.stringify(authObject),{ headers: headers})     
     .map((response:Response) => {
      let data = response.json();
      if(data){
        if(data === "Authenticated"){
          this.userService.saveUser();
        }
      }
      return data;

   }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));   
       

  }

  logoutLocally(){
    
    this.userService.clearUser();

  }


}
