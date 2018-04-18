import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {IProfile} from '../models/model';
import {UserService} from '../Services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'PhoneNumber.component.html'
})

export class PhoneNumberComponent {
    model: any = {};
    loading = false;

    profile:IProfile;
    constructor(
        private router: Router,
        private userService:UserService) { 
            this.profile={_id:'',Email:'',ProfileName:'Sairam',User:{_id:'',Email:'',Password:''}};
        }



    addMobileNo($event:any){

        this.userService.addMobileNo(this.profile).subscribe(data => {
            this.router.navigateByUrl('/login');
        },
        error => {
        });

    }


    verifyMobile($event:any){

        this.userService.verifyMobile(this.profile).subscribe(data => {
            this.router.navigateByUrl('/login');
        },
        error => {
        });

    }
}
