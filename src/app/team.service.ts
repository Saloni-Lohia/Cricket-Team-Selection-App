import { Injectable } from '@angular/core';
import { Player } from './players';
import { Subject } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable()
export class TeamService {
    team:Player[];

    @SessionStorage()
    myTeam:string;

    private teamSource = new Subject<string>();
    teamBroadCaster = this.teamSource.asObservable();


    constructor(){
        this.team=JSON.parse(this.myTeam)||[];
    }
    addToTeam(player:Player):void
    {
        if(this.team.length<11)
        {
            var c=0;
            for(var i in this.team)
            {
                if(JSON.stringify(this.team[i])==JSON.stringify(player))
                {
                    c=1;
                    break;
                }
            }
            if(c==0)
            {
                this.team=this.team.concat(player)
                //console.log(this.team);
                this.myTeam=JSON.stringify(this.team);
                this.teamSource.next(this.myTeam);
                alert("Player Added successfully");

                
            }
            else
            {
                alert("You already have this player in your team");
            }
            
        }
        else
        {
             alert("You already have 11 players in your team");
        }
        this.teamSource.next(this.myTeam);
       
    }
    getTeam():Player[]
    {
        //console.log(this.team);
        return this.team;
    }
    removeplayer(index:number):void{
        this.team.splice(index,1);
        this.myTeam=JSON.stringify(this.team);

        this.teamSource.next(this.myTeam);
    }
}