import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private router: Router,
             private userServices: UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
     if(route && route.routeConfig.path === 'login'){
       if(this.userServices.getUser()){
         this.router.navigate(['/tjx'])
         return false;
       } else{
         return true;
       }
     }else if(route){
       if(this.userServices.getUser()){
         return true;
       } else{
         this.router.navigate(['/login'])
       }
       
     }
  }
}
