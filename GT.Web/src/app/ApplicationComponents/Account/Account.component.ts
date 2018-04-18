import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {Globals} from '../../models/Globals'

@Component({
    moduleId: module.id,
    selector: 'Account',
    templateUrl: 'Account.component.html'
})

export class AccountComponent {
   
    accountDeposit:Deposit=new Deposit();


    constructor(private _Globals:Globals){

    }

    depositBoxControls={
        title:'Add Money',
        footer:false,
        collapse:false,
        settings:{
            hide:true
        },
        close:false,
        lables:[
        ],
        images:[
        ],
        chat:false,
        isChatBox:false,
        isContactsOpen:false
    };

    withdrawBoxControls={
        title:'Withdraw Money',
        footer:false,
        collapse:false,
        settings:{
            hide:true
        },
        close:false,
        lables:[
        ],
        images:[
        ],
        chat:false,
        isChatBox:false,
        isContactsOpen:false
    };

    convertToBoxControls={
        title:'Convert to coins',
        footer:false,
        collapse:false,
        settings:{
            hide:true
        },
        close:false,
        lables:[
        ],
        images:[
        ],
        chat:false,
        isChatBox:false,
        isContactsOpen:false
    };

    convertFromBoxControls={
        title:'Convert to Rupees',
        footer:false,
        collapse:false,
        settings:{
            hide:true
        },
        close:false,
        lables:[
        ],
        images:[
        ],
        chat:false,
        isChatBox:false,
        isContactsOpen:false
    };
}


class Deposit{
    _id:number;
    DepositAmount?:number;
    WithdrawAmount?:number;
    ConvertTo?:number;
    ConvertFrom?:number;
}