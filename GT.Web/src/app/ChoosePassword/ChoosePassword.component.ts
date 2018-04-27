import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IProfile} from '../Services/WebSocket/Models';
import {UserService} from '../Services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'ChoosePassword.component.html'
})

export class ChoosePasswordComponent {
    model: any = {};
    
    Password:string;

    profile:IProfile;

    constructor(
        private router: Router,
        private userService:UserService) { 
            this.profile={_id:'',Email:'',ProfileName:'Sairam',User:{_id:'',Email:'',Password:''}};
        }



    choosePassword($event:any){

    this.userService.choosePassword(this.profile.User).subscribe(data => {
            this.router.navigateByUrl('/login');
        },
        error => {
            console.log(error);
        });

    }
}
