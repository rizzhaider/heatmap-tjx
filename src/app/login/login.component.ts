import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.userame)
      .subscribe(params => {
        const _usernameQ = params.userame;
        const _passwordQ = params.password;
        this.userAuthentication(_usernameQ, _passwordQ);
      });
  }
  showError() {
    this.toastr.error('something went wrong!', 'Oops!', {timeOut: 2000})
  }
  login(form: NgForm) {   
    const _username = form.value.username;
    const _password = form.value.password;
    this.userAuthentication(_username, _password);
  }
  userAuthentication(username, password){
    this.authenticationService.login(username, password)
    .subscribe(
                data => {
                    if (data === "Authenticated") {                      
                        this.router.navigate(['tjx']);
                    }else{                     
                      this.showError();
                    }
                },
       error => { 
        this.showError();

       });
  }
}
