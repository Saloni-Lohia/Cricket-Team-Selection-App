import { Component } from '@angular/core';
import { Player } from './player';
import { TeamService } from './team.service';

@Component({
    selector: 'teamdetails',
    template: `       
    <h1>Team Details!</h1>
    <table border="3px solid black" align="left">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Player Image</th>
            <th>Action</th>                
        </tr>
        <tr *ngFor="let player of team, let i=index">
            <td>{{player.id}}</td>
            <td><a [routerLink]="['playerdetails',player.id]">{{player.name}}</a></td>
            <td>{{player.position}}</td>
            <td><img [src]=player.imagePth></td>
            <td><button (click)='remove(i)'>Remove</button></td>
        </tr>
    </table>
    <div>
        <router-outlet></router-outlet>
    </div>
`,
styles: [`
h1{
    text-align:left;
}
img{
    width:150px;
    height:150px;
}
th{
    text-align:left;
    background-color:peachpuff;
    fontWeight:bold;
}`],
})
export class TeamDetailsComponent {
    team:Player[];
    constructor(private teamService:TeamService) {
        teamService.teamBroadCaster.subscribe(res=>{
            this.team=JSON.parse(res);
        })
        this.team=teamService.getTeam();
        //console.log(this.team);
     }
     remove(index):void{
         this.teamService.removeplayer(index);
     }

}
