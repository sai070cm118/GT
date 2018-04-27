
import {Component, Input, Output, EventEmitter, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';

import {IProfile} from '../Services/WebSocket/Models';

import {UserService} from '../Services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    profile:IProfile;


    constructor(
        private router: Router,
        private userService:UserService) { 
            this.profile={_id:'',Email:'',ProfileName:'',User:{_id:'',Email:'',Password:''}};
        }

    regiserUser($event:any){
        this.userService.registerUser(this.profile).subscribe(data => {
            localStorage.setItem('currentUser',data.Token);
            this.router.navigateByUrl('/');
        },
        error => {
        });
    }
}
