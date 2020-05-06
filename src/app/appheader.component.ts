import { Component } from '@angular/core';
import { LoginService } from './loginService.service';


@Component({
    selector: 'app-header',
    template: `<h2>Welcome {{userName}}!`,

})
export class HeaderComponent{
    
    userName:string;

    constructor(private loginService:LoginService) { 
        loginService.getUserName().subscribe(newName => {
            this.userName = newName;
        })
        this.userName = loginService.userName;
    }
}
