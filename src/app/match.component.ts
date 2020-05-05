import { Component } from '@angular/core';
import { MatchService } from './match.service';

@Component({
    selector: 'match',
    template: `
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <div class="container">
  <table class="table table-hover table-bordered">
    <thead>
      <tr>
        <th>Match Type</th>
        <th>Ground Name</th>
        <th>Opposition Team</th>
        <th>Match Date</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success"   *ngFor="let match of matchdetails">
        <td>{{match.matchtype}}</td>
        <td>{{match.groundname}}</td>
        <td>{{match.oppositeteam}}</td>
        <td>{{match.dateofmatch}}</td>
      </tr>      
    </tbody>
  </table>
</div>
    `,
    styles: [
      `
      table{
        background-color: grey;
      }
      th{
        text-align: center;
      }
      
      `],
    providers:[MatchService]
})
export class MatchComponent {
    matchdetails:{"matchtype":string,"groundname":string,"oppositeteam":string,"dateofmatch":string}[];
    constructor(matchService:MatchService) {    
        this.matchdetails=matchService.matchdetails;
     }
}
