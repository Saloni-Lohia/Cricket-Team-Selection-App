import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItems:string[];
    constructor()
    {
        this.menuItems = ['Home','Login','Players', 'Team','Match'];
    }
}