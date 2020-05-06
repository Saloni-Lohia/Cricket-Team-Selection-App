import { Injectable } from '@angular/core';
import { Player } from './players';

@Injectable()
export class PlayerService {
    players:Player[];
    constructor()
    {
        let p1 = new Player(1,"Harmanpreet Kaur","ALL ROUNDER","./assets/images/Harmanpreet.icon.jpg");
        let p2 = new Player(2,"Taniya Bhatia","WICKETKEEPER BATSMAN","./assets/images/Taniya.icon.jpg");
        let p3 = new Player(3,"Deepti Sharma","ALL ROUNDER","./assets/images/Deepti.icon.jpg");
        let p4 = new Player(4,"Ekta Bisht","BOWLER","./assets/images/Ekta.icon.jpg");
        let p5 = new Player(5,"Smriti Mandhana","BATSMAN","./assets/images/Smriti.icon.jpg");
        let p6 = new Player(6,"Dayalan Hemalatha","BATSMAN","./assets/images/Dayalan.icon.jpg");
        let p7 = new Player(7,"Shikha Pandey","All ROUNDER","./assets/images/Shikha.jpg");
        let p8 = new Player(8,"Manshi Joshi","BOWLER","./assets/images/Mansi.icon.jpg");
        let p9 = new Player(9,"Anuja Patil","BOWLER","./assets/images/Anuja.icon.jpg");
        let p10 = new Player(10,"Veda Krishnamurthy","BATSMAN","./assets/images/Veda.icon.jpg");
        let p11 = new Player(11,"Mithali Raj","BATSMAN","./assets/images/Mithali.icon.jpg");
        let p12 = new Player(12,"Poonam Yadav","BOWLER","./assets/images/Poonam.icon.jpg");
        let p13 = new Player(13,"Jemimah Rodrigues","BATSMAN","./assets/images/Jemimah.icon.jpg");
        let p14 = new Player(14,"Arundhati reddy","BOWLER","./assets/images/Arundhati.icon.jpg");
        let p15 = new Player(15,"Radha Yadav","BOWLER","./assets/images/Radha.icon.jpg");
        let p16 = new Player(16,"Harleen Deol","BATSMAN","./assets/images/Harleen.jpg");
        let p17 = new Player(17,"Richa Ghosh","BOWLER","./assets/images/Richa.jpg");
        let p18= new Player(18,"Shafali Verma","BATSMAN","./assets/images/Shafali.jpg");
        let p19= new Player(19,"Pooja Vastrakar","BOWLER","./assets/images/Pooja.icon.jpg");
        let p20 = new Player(20,"Shikha Pandey","ALL ROUNDER","./assets/images/Shikha.jpg")
        this.players=new Array<Player>();   
        this.players.push(p1);
        this.players.push(p2);
        this.players.push(p3);
        this.players.push(p4);
        this.players.push(p5);
        this.players.push(p6);
        this.players.push(p7);
        this.players.push(p8);
        this.players.push(p9);
        this.players.push(p10);
        this.players.push(p11);
        this.players.push(p12);
        this.players.push(p13);
        this.players.push(p14);
        this.players.push(p15);
        this.players.push(p16);
        this.players.push(p17);
        this.players.push(p18);
        this.players.push(p19);
        this.players.push(p20);
    }
    getPlayers():Player[]
    {
        return this.players;
    }
}