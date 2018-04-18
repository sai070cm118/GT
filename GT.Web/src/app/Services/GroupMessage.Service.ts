

import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { HttpClientWraper } from './HttpClientWraper';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GroupMessageService {
    
     constructor (private http: HttpClientWraper) {}

     private userUrl = 'http://localhost:3002/'; 




    

}