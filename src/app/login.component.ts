import { Component, Input} from '@angular/core';
import { LoginService } from './loginService.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <h3>Login Here</h3>
        <div class="container">
        Enter Username: <input type='text' [(ngModel)]='name' /> <br/> 
        Enter Password: <input type='text' [(ngModel)]='password' /> <br/>
        <button type="button" class="btn btn-success" (click)='login()'>Login</button>
        </div>
    `,
    styles: [`
    input{
        margin : 10px;
    }
    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }
    `],
})
export class LoginComponent {
    name:string='';
    password:string='';
        constructor(private loginService:LoginService,private router:Router) {
            
         }
        login(){
            console.log(this.name);
            this.loginService.setUserName(this.name);
            if(this.name==='Admin'&&this.password==='Admin'||this.name==='admin'&&this.password==='admin')
            {
                this.router.navigate(['/players']);
            }
            else
            {
                this.router.navigate(['/home']);
            }
            
        }
}
