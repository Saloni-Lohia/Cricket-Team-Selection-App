import { Component } from '@angular/core';
import { Player } from './players';
import { PlayerService } from './players.service';
import { LoginService } from './loginService.service';

@Component({
    selector: 'player',
    template: `
    <app-header></app-header>
    <h1> Players List</h1>
    <table border='3px solid black' align='center'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Player Image</th> 
            <th colspan='3'>Actions</th>   
        </tr>
        <tr *ngFor="let player of players, let i = index">
            <td>{{player.id}}</td>
            <td>{{player.name}}</td>
            <td>{{player.position}}</td>
            <td><img [src]=player.imagePth></td>
            <td><button class="btn btn-warning" *ngIf="isAdmin" (click)="showDetails(player)">Details</button></td>
            <td><addtoteam [selectedPlayer]="player"></addtoteam></td>
        </tr>
    </table>
    `,
     styles: [`
     h1{
      text-align:center;
  }
    img{
      border: 1px solid black;
      width:150px;
      height:150px
  }
  table{
      background-color: powderblue;
      display: 'inline-block';
      float: left;
      margin-left: 50px;
    }
    td{
      padding : 15px;
    }
      table caption{
      text-align: center;
    }       
      th{
      padding : 20px;
      text-align: center;
      background-color: dodgerblue;
      fontWeight: bold;
      font-size: 15px;
    }
      div{
      float: right;
      width: 300px;
      margin-top: 150px;
      margin-right:200px;
    }
    `],   
    providers:[PlayerService]
})
export class PlayersComponent{
    players:Player[];
    isAdmin:boolean=false;
    name:string;
    constructor(playerService:PlayerService,loginService:LoginService) { 
        this.players=playerService.getPlayers();
        this.name=loginService.getName();
        if(this.name==='Admin'||this.name==='admin')
        {
          this.isAdmin=true;
        }
        else
        {
          this.isAdmin=false;
        }

    }
    showDetails(player)
    {
        alert("Player ID: "+player.id+'\nPlayer Name: '+player.name+'\nPlayer Position: '+player.position);   //
    }

    
}
