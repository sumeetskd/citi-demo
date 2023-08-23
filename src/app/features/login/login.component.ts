import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginform=this.fb.group({
    username:['', [Validators.required]],
    password:['', [Validators.required]]});
    
    constructor(private fb:FormBuilder, private loginService:LoginServiceService, private router:Router){}

    get username() { return this.loginform.get("username") }
    get password() { return this.loginform.get("password") }

      login() {
        
        this.loginService.addLoginData(this.loginform.value)
          .then(response => {
            console.log('Login data added successfully:', response);
            this.router.navigateByUrl("home")

          })
          .catch(error => {
            console.error('Error adding login data:', error);
            this.router.navigateByUrl("home")
          });
    
    }
    

}
