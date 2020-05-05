import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { TeamService } from './team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'playerdetails',
    template: `<h3>Player Details for Player Id {{playerID}}</h3>
                <div *ngFor='let player of players'>
                    <div *ngIf='player.id === playerID'>
                        <span>{{player.name}}</span><br>
                        <span>{{player.position}}</span><br>
                        <img [src]='player.imagePth'>
                    </div>
                </div>
    `,
    styles: [`
        img{
            width:150px;
            height:150px;
        }
        h3,span{
            color:maroon;
            width:auto;
        }
        div{
            font-weight:bold;
            font-style:italic;
        }
    `]
})
export class PlayerDetailsComponent implements OnInit {
    playerID:number;
    players:Player[];
    constructor(private teamService:TeamService,private activatedRoute:ActivatedRoute) { 
        this.players=teamService.getTeam();
        
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(parameters => {
            this.playerID=parseInt(parameters['id']);   
        })
     }
}
