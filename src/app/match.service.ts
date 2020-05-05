import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {
    matchdetails:{"matchtype":string,"groundname":string,"oppositeteam":string,"dateofmatch":string}[];
    constructor()
    {
        this.matchdetails=[ 
        {"matchtype":"T20","groundname":"Perth","oppositeteam":"South Africa","dateofmatch":"24-10-2020"},
        {"matchtype":"T20","groundname":"Melbourne Cricket Ground","oppositeteam":"A2","dateofmatch":"29-10-2020"},
        {"matchtype":"T20","groundname":"Melbourne Cricket Ground","oppositeteam":"England","dateofmatch":"01-11-2020"},
        {"matchtype":"T20","groundname":"Adelaide Oval","oppositeteam":"B1","dateofmatch":"05-11-2020"},
        {"matchtype":"T20","groundname":"Sydney Cricket Ground","oppositeteam":"Afghanistan","dateofmatch":"08-11-2020"}
        
    ];
    }
    
}