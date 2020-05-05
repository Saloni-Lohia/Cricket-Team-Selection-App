import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class PlayerService {
    players:Player[];
    constructor()
    {
        let p1 = new Player(1,"Harmanpreet Kaur","ALL ROUNDER","./assets/images/bhuvi.jpg");
        let p2 = new Player(2,"Taniya Bhatia","WICKETKEEPER BATSMAN","./assets/images/viratkohli.jpg");
        let p3 = new Player(3,"Rohit Sharma","BATSMAN","./assets/images/rohitsharma.jpg");
        let p4 = new Player(4,"Jasprit Bumrah","BOWLER","./assets/images/bumrah.jpg");
        let p5 = new Player(5,"KL Rahul","BATSMAN","./assets/images/klrahul.jpg");
        let p6 = new Player(6,"Dinesh Kartik","BATSMAN KEEPER","./assets/images/dk.jpg");
        let p7 = new Player(7,"Hanuman Vihar","All ROUNDER","./assets/images/hv.jpg");
        let p8 = new Player(8,"Ishant Sharma","BOWLER","./assets/images/ishant sharma.jpg");
        let p9 = new Player(9,"Khaleel Ahmed","BOWLER","./assets/images/khaleel ahmed.jpg");
        let p10 = new Player(10,"Manish Pandey","BATSMAN","./assets/images/manish pandey.jpg");
        let p11 = new Player(11,"Mayank Agarawal","BATSMAN","./assets/images/ma.jpg");
        let p12 = new Player(12,"Mohammad Siraj","BOWLER","./assets/images/ms.jpg");
        let p13 = new Player(13,"MS Dhoni","BATSMAN KEEPER","./assets/images/MS-Dhoni.jpg");
        let p14 = new Player(14,"Navdeep Saini","BOWLER","./assets/images/navdeep saini.jpg");
        let p15 = new Player(15,"Prithvi Shaw","BATSMAN KEEPER","./assets/images/prithvi shaw.jpg");
        let p16 = new Player(16,"Rishabh Pant","BATSMAN KEEPER","./assets/images/rishaabh pant.jpg");
        let p17 = new Player(17,"Sanju Samson","BATSMAN KEEPER","./assets/images/sanju samson.jpg");
        let p18= new Player(18,"Shikhar Dhawan","BATSMAN","./assets/images/shikhar dhawan.jpg");
        let p19= new Player(19,"Shivam Dube","ALL ROUNDER","./assets/images/shivamdube.jpg");
        let p20 = new Player(20,"Shreyas Iyer","BATSMAN","./assets/images/shreyas iyer.jpg")
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