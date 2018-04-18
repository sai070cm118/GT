import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { HttpClientWraper } from './HttpClientWraper';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

     // Resolve HTTP using the constructor
     constructor (private http: HttpClientWraper) {}

     // private instance variable to hold base url
     private userUrl = 'http://localhost:3002/'; 
     private webUrl = 'http://localhost:3000/'; 


    registerUser(User:any) : Observable<any> {
        return this.http.post(this.webUrl+'Register',User)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }



    getUsers() : Observable<any> {

        // ...using get request
        return this.http.get(this.userUrl)
                        // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json())
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    validateToken(token:string):Observable<any>{
        return this.http.get(this.userUrl+'api/profile/validateToken/'+token)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));

        //return Observable.of({});
    }


    choosePassword(User:any):Observable<any>{
         return this.http.post(this.userUrl+'api/user/SetPassword/',User)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
        
    changePassword(User:any):Observable<any>{
        return this.http.post(this.userUrl+'api/user/ResetPassword/',User)
           // ...and calling .json() on the response to return data
           .map((res:Response) => res.json())
           //...errors if any
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
    addMobileNo(User:any):Observable<any>{
         return this.http.post(this.userUrl+'api/user/AddMobileNo/',User)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

        
    verifyMobile(User:any):Observable<any>{
         return this.http.post(this.userUrl+'api/user/verifyMobile/',User)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    login(User:any):Observable<any>{
         return this.http.post(this.webUrl+'login/',User)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


    
    recoverAccount(User):Observable<any>{
         return this.http.get(this.userUrl+'api/user/ForgotPassword/'+User.Email)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    
    recoverPassword(User:any):Observable<any>{
         return this.http.post(this.userUrl+'api/user/RecoverPassword/',User)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    resendVerificationEmail():Observable<any>{
        return this.http.get(this.userUrl+'api/user/resend/VerificationEmail/')
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}