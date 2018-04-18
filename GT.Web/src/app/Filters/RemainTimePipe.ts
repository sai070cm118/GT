import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs/operator/retry';
import {AppData} from '../Services/WebSocket/AppData';

@Pipe({name: 'remainTime'})
export class RemainTimePipe implements PipeTransform {


    constructor(private _Globals:AppData){

    }

  transform(startAt: string, endAt: string,type: string): any {

    console.log(type);

    if(type=='Title'){
        return 'Start In';
    }
    else if(type=='Color'){
        return 'Start In';
    }
    else{
        var startDate=new Date(startAt);
        var endDate=new Date(endAt);

        if(this._Globals.currentTime>=startDate.getTime() &&            this._Globals.currentTime<=endDate.getTime())
            return ((endDate.getTime()-this._Globals.currentTime)/(endDate.getTime()-startDate.getTime()))*100;
        else
            return 0;
    }

    //var startDate=new Date(startAt);
    //var endDate=new Date(endAt);

    //return (endDate.getTime()-startDate.getTime())/1000;

  }
}