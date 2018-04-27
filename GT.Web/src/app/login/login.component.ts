import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {IProfile} from '../Services/WebSocket/Models';
import {UserService} from '../Services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    
    model: any = {};
    loading = false;
    returnUrl: string;
    profile:IProfile;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService:UserService) { 
            this.profile={_id:'',Email:'',ProfileName:'',User:{_id:'',Email:'',Password:''}};
        }

    ngOnInit() {
        //Get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login($event:any){
        this.userService.login(this.profile).subscribe(data => {
            localStorage.setItem('Token',data.Token);
            this.router.navigateByUrl('/');
        },
        error => {
        });
    }
}
