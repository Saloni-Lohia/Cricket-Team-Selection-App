import { Component } from '@angular/core';
import { Player } from './players';
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
            <td id="remove"><button class="btn btn-danger" (click)='remove(i)'>Remove</button></td>
        </tr>
    </table>
    <div>
        <router-outlet></router-outlet>
    </div>
`,
styles: [`
h1{
    text-align:center;
}
img{
    padding : 10px;
    width:150px;
    height:150px;
}
#remove{
    padding : 20px;
}
table{
    background-color: powderblue;
    margin-left : 100px;
}
th{
    width : 80px;
    height : 30px;
    text-align: center;
    background-color:dodgerblue;
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
