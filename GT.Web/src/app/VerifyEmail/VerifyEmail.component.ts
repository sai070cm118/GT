import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../Services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'VerifyEmail.component.html'
})

export class VerifyEmailComponent {

    constructor(private router: Router,
        private userService:UserService) { }

    resendVerificationEmail($event:any){
        
        this.userService.resendVerificationEmail().subscribe(data => {
            this.router.navigateByUrl('/');
        },
        error => {
        });
    };
}
