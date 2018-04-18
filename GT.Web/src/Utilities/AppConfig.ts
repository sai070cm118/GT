import { Injectable } from '@angular/core';
import { AppData } from '../app/Services/WebSocket/AppData';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfig{



    //public AppSocketConnectionURI:any='http://localhost:3004/AsUser';
    public AppSocketConnectionURI:any='https://chitipata.herokuapp.com/AsUser';

    public UserServiceURI="https://commonusermanager.herokuapp.com/api/";

    public LoginURI:any=this.UserServiceURI+'user/login';
    public RegisterURI:any=this.UserServiceURI+'profile';
    public RefreshTokenURI:any=this.UserServiceURI+'user/token/refresh';

    constructor(
        private _storage : Storage,
        private _http: HttpClient,
        private _appData:AppData){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                this._appData.token=undefined;
            else
                this._appData.token= JSON.parse(val);
        });
    }
    getSessionToken(){      
        return this._appData.token == null ? undefined : this._appData.token.SessionToken;
    }
    getbackSessionToken(callback:any){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                callback(undefined);
            else
            callback(JSON.parse(val).SessionToken);
        });
    }
    getRefreshToken(){
        return this._appData.token == null ? undefined :this._appData.token.RefreshToken;
    }
    getbackRefreshToken(callback:any){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                callback(undefined);
            else
            callback(JSON.parse(val).RefreshToken);
        });
    }
    getUserId(){
        return this._appData.token == null ? undefined :this._appData.token.UserId;
    }
    getbackUserId(callback:any){
        this._storage.get('Token').then((val) => {
            if(val==undefined || val==null)
                callback(undefined);
            else
            callback(JSON.parse(val).UserId);
        });
    }
    setToken(tokenObj:any){
        this._storage.set('Token',JSON.stringify(tokenObj));
        this._appData.token=tokenObj;
    }
    removeToken(){
        this._storage.remove('Token');
        this._appData.token=undefined;
    }

    refreshToken(){
        /* return new Promise((resolve, reject) => {
            this._http.get(this.RefreshTokenURI, {headers:{'RefreshToken':this.getRefreshToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          }); */
    }
}