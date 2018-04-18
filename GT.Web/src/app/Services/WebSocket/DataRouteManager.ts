import { Injectable } from '@angular/core';
import { ProfileController } from './RouteService/ProfileController';


@Injectable()
export class DataRouteManager {


    constructor(
        private _profileController:ProfileController
    ){
    }


    RouteController(input:any) {


        if(input.error){
            console.log(input);
        }
        else{

            
            this._profileController.manageData(input);
        }

    }

}