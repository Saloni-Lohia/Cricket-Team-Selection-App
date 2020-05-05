import { Component} from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'menu',
    template: ` <div class="container">
    <nav class="navbar navbar-inverse"> 
        <ul class="nav navbar-nav">
              <li *ngFor="let item of menuItems">
                <a routerLink="{{item | lowercase }}">{{item}}</a>
              </li>          
        </ul>
    </nav>
</div>`,
    providers:[MenuService],
    styles: [``]
})
export class MenuComponent{

    menuItems:string[];
    constructor(menuService :MenuService) { 
        this.menuItems = menuService.menuItems;
        }

}
