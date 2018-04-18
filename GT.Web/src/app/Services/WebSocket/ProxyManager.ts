import { Injectable } from '@angular/core';
import { AppConfig } from '../Utilities/AppConfig';
import { AppData } from './AppData';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProxyManager {

    constructor(
        private _http: HttpClient,
        private _appConfig: AppConfig,
        private _appData: AppData,
    ) {

        }

    header = { "headers": {"Content-Type": "application/json"} };

    login(){

        return new Promise((resolve, reject) => {
            this._http.post(this._appConfig.LoginURI, this._appData.login)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          });

    }
    

    register(){
        return new Promise((resolve, reject) => {
            this._http.post(this._appConfig.RegisterURI, this._appData.login)
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          });
    }
    

    refreshToken(){
        return new Promise((resolve, reject) => {
            this._http.get(this._appConfig.RefreshTokenURI, {headers:{'RefreshToken':this._appConfig.getRefreshToken()}})
              .subscribe(res => {

                console.log(res);
                resolve(res);
              }, (err) => {
                  console.log(err);
                reject(err);
              });
          });
    }

    
}