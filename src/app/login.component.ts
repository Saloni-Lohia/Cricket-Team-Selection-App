import { Component, Input} from '@angular/core';
import { LoginService } from './loginService.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <h3>Login Component!</h3>
        Enter Username: <input type='text' [(ngModel)]='name' /> <br/> 
        Enter Password: <input type='text' [(ngModel)]='password' /> <br/>
        <button (click)='login()'>Login</button>
    `,
    styles: [``],
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
            /*else if(this.name==='Guest'&&this.password==='Guest')
            {
                this.router.navigate(['/home']);
            }*/
            else
            {
                this.router.navigate(['/home']);
            }
            
        }
}
