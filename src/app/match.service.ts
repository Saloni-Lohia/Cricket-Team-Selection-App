import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {
    matchdetails:{"matchtype":string,"groundname":string,"oppositeteam":string,"dateofmatch":string}[];
    constructor()
    {
        this.matchdetails=[ 
        {"matchtype":"T20","groundname":"Lalbhai Contractor Stadium, India","oppositeteam":"South Africa","dateofmatch":"29-09-2019"},
        {"matchtype":"T20","groundname":"Darren Sammy National Stadium","oppositeteam":"West Indies","dateofmatch":"10-11-2019"},
        {"matchtype":"ODI","groundname":"Melbourne Cricket Ground","oppositeteam":"Australia","dateofmatch":"08-03-2020"},
        {"matchtype":"ODI","groundname":"Diamond Oval, South Africa","oppositeteam":"South Africa","dateofmatch":"05-02-2018"},
        {"matchtype":"ODI","groundname":"Bay Oval, New Zealand","oppositeteam":"New Zealand","dateofmatch":"29-01-2019"},
        {"matchtype":"ODI","groundname":"Wankhede Stadium, India","oppositeteam":"England","dateofmatch":"22-02-2019"},
        {"matchtype":"ODI","groundname":"Reliance Cricket Ground, India","oppositeteam":"England","dateofmatch":"22-02-2019"}
    ];
    }
    
}