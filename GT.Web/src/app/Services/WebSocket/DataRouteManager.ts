import { Injectable } from '@angular/core';
import { ProfileController } from './RouteService/ProfileController';
import { CGroupController } from './RouteService/CGroupController';


@Injectable()
export class DataRouteManager {


    constructor(
        private _profileController:ProfileController,
        private _cGroupController:CGroupController
    ){
    }


    RouteController(input:any) {


        if(input.error){
            console.log(input);
        }
        else{

            switch(input.Type){
                case 'MyProfile':
                    this._profileController.setProfile(input.data);
                break;
                case 'default':console.log('Default');
                break
            }

        }

    }

}