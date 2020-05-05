import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { MenuComponent } from './menu.component';
import { PlayersComponent } from './players.component';
import { AddToTeamComponent } from './addtoteam.component';
import{ TeamDetailsComponent} from './teamdetails.component'
import { AngularWebStorageModule } from 'angular-web-storage';
import{FormsModule} from '@angular/forms';
import { HeaderComponent } from './header.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { MatchComponent } from './match.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { PlayerDetailsComponent } from './playerdetail.component';

let routes:Routes =[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'players',
    component:PlayersComponent
  }
  ,
  {
    path:'team',
    component:TeamDetailsComponent,
    children:[{
      path:'playerdetails/:id',
      component:PlayerDetailsComponent

    }]
  }
  ,
  {
    path:'match',
    component:MatchComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PlayersComponent,
    AddToTeamComponent,
    TeamDetailsComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    MatchComponent,
    PageNotFoundComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
