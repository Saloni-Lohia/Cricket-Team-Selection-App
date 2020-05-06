import { Component, Input} from '@angular/core';
import { Player } from './players';
import { TeamService } from './team.service';

@Component({
    selector: 'addtoteam',
    template: `<button (click)="addPlayer() ">Add To Team</button>`,
    styles: [``],
})
export class AddToTeamComponent{

    @Input()
    selectedPlayer:Player;
    constructor(private teamService:TeamService) {

     }
    addPlayer():void{
        this.teamService.addToTeam(this.selectedPlayer);
    }


}
