import { Component } from '@angular/core';
import { TeamService } from './team.service';
import { LoginService } from './loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TeamService,
  LoginService
              ]
})
export class AppComponent {
  title = 'CricketTeam';
}
