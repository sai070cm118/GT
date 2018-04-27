import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params  } from '@angular/router';
import {IUser} from '../Services/WebSocket/Models';
import {UserService} from '../Services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'RecoverAccount.component.html'
})

export class RecoverAccountComponent {

    RecoverWindowType=1;
    user:IUser;
    


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService:UserService) { 
            this.user={_id:'',Email:null};
        }

    ngOnInit() {
        this.route.params.subscribe(params => { 
            console.log(params);

            if(params.id!="Recover"){
                this.RecoverWindowType=4;
                this.user.RecoverHash=params.id;
                this.user.Email=params.Email;
            }
        });  
    }
    recoverAccount($event:any){
        this.userService.recoverAccount(this.user).subscribe(result => {
                console.log(result);
                if(result.error){

                }
                else{
                    this.RecoverWindowType=result.data.RecoverType ? 2 : 3;
                }

            },
            error => {
                console.log(error);
            });
    }

    

    recoverPassword($event:any){
        this.userService.recoverPassword(this.user).subscribe(data => {
                this.router.navigateByUrl('/login');
            },
            error => {
                console.log(error);
            });
    }
}
