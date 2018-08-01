import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IProfile} from '../Services/WebSocket/Models';


@Injectable()
export class MenuService{

    getMenu():any{
        return [
            {
                menuItem:"Dashboard",
                icon:"fa fa-dashboard",
                rightContent:[
                ],
                subMenu:[
                ]
            },
            {
                menuItem:"GameBoard",
                icon:"fa fa-gamepad",
                rightContent:[
                ],
                subMenu:[
                    {
                        subMenuItem:"My Games",
                        icon:"fa fa-gamepad",
                        rightContent:[
                        ]
                    },
                    {
                        subMenuItem:"My Betted Games",
                        icon:"fa fa-gamepad",
                        rightContent:[
                        ]
                    },
                    {
                        subMenuItem:"Running Games",
                        icon:"fa fa-gamepad",
                        rightContent:[
                        ]
                    },
                    {
                        subMenuItem:"Challenges",
                        icon:"fa fa-gamepad",
                        rightContent:[
                        ]
                    }
                ]
            },
            {
                menuItem:"Profile",
                icon:"fa fa-user",
                rightContent:[
                ],
                subMenu:[
                ]
            },
            {
                menuItem:"Account",
                icon:"fa fa-credit-card",
                rightContent:[
                ],
                subMenu:[
                ]
            }
        ];
    }
}

/*
,
{
    menuItem:"Settings",
    icon:"fa fa-cogs",
    rightContent:[
    ],
    subMenu:[
    ]
}
*/