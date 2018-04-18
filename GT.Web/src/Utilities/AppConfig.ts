import { Injectable } from '@angular/core';
import { AppData } from '../app/Services/WebSocket/AppData';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfig{



    public AppSocketConnectionURI:any='http://localhost:3004/AsUser';
    

    constructor(
        private _http: HttpClient,
        private _appData:AppData){
    }
    getSessionToken(){      
        return localStorage.getItem('Token');
    }
}