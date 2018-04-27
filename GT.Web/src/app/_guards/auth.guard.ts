import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../Services/index';
import { Observable } from 'rxjs/Observable';

import { AppData } from '../Services/WebSocket/AppData';
import { SocketFunctions } from '../Services/WebSocket/SocketFunctions/SocketFunctions';


@Injectable()
export class AuthGuard implements CanActivate {

    public UserState:any =0;
    public IsTokenValid:any;

    constructor(
        private router: Router,
        private userService: UserService,
        private _Globals:AppData,
        private _socketFunctions:SocketFunctions
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(state.url=='/logout'){
            localStorage.removeItem('Token');
            this.router.navigate(['/login']);
            this._Globals.Profile=null;
        }
        // Call Service for  First Request
        else if (localStorage.getItem('Token')!=undefined) {

            return  this.userService.validateToken(localStorage.getItem('Token')).map(validateResult => {
                if(!validateResult.error){
                    this.UserState=validateResult.data.Status;


                    if(this.UserState==1){ 
            
                        if(state.url=='/ChoosePassword'){
                            return true;
                        }
                        else{
                            this.router.navigate(['/ChoosePassword']);
                        }
                    }
                    else if(this.UserState==2){
                        if(state.url=='/VerifyEmail'){
                            return true;
                        }
                        else{
                            this.router.navigate(['/VerifyEmail']);
                        }
                    }
                    else if(this.UserState==3){
                        if(state.url=='/PhoneNumber'){
                            return true;
                        }
                        else{
                            this.router.navigate(['/PhoneNumber']);
                        }
                    }
                    else if(this.UserState==4){
                        this._socketFunctions.initializeData();
                        if(state.url=='/'){
                            return true;
                        }
                        else{
                            this.router.navigate(['/']);
                        }
                    }
                    else{
                        if(state.url=='/login'){
                            return true;
                        }
                        else{
                            localStorage.removeItem('Token');
                            this._Globals.Profile=null;
                            this.router.navigate(['/login']);
                        }
                    }
                }
                else{
                    this._Globals.Profile=null;
                    localStorage.removeItem('Token');
                    this.router.navigate(['/login']);
                }
            }); 
        }
        else{
            if(state.url=='/login'){
                return true;
            }
            else if(state.url=='/register'){
                return true;
            }
            else if(state.url=='/RecoverPassword'){
                return true;
            }
            else{

                if(state.root.firstChild.url[0]!=undefined && state.root.firstChild.url[0].path!=undefined && state.root.firstChild.url[0].path=='login'){
                    return this.userService.validateToken(route.params.id).map(validateResult => {
                        if(!validateResult.error){
                            localStorage.setItem('Token',route.params.id);
                            this.router.navigate(['/']);
                            return true;
                        }
                        else{
                            this.router.navigate(['/login']);
                            return true;
                        }
                    });
                }
                else{
                    this.router.navigate(['/login']);
                    return true;
                }
            }
        }

        return true;
    }

    validateUser(token:any): any{
        this.userService.validateToken(token).subscribe(validateResult => {
            return validateResult;
        });
    }
}