import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ChoosePasswordComponent } from './ChoosePassword/index';
import { PhoneNumberComponent } from './PhoneNumber/index';
import { VerifyEmailComponent } from './VerifyEmail/index';
import { RecoverAccountComponent } from './RecoverAccount/index';



import { LayoutComponent } from './Layout/index';
import { HeaderComponent } from './Header/index';
import { LeftMenuComponent } from './LeftMenu/index';
import { ContentPlaceholderComponent } from './ContentPlaceholder/index';
import { FooterComponent } from './Footer/index';
import { RightMenuComponent } from './RightMenu/index';
import { ChatComponent } from './Chat/index';
import {ChatMessageListComponent} from './Chat/ChatMessageList/index';
import {ChatProfileListComponent} from './Chat/ChatProfileList/index';

import {TreeComponent} from './Widges/Tree/index';
import {BoxComponent} from './Widges/Box/index';
import {DropdownMenuComponent} from './Widges/DropdownMenu/index';
import {MediumListComponent} from './Widges/ListItem/MediumList/index';
import {SimpleListComponent} from './Widges/ListItem/SimpleList/index';
import {PopOverMenuComponent} from './Widges/PopOverMenu/index';


//Appliction components

import {AccountComponent} from './ApplicationComponents/Account/index';
import {DashboardComponent} from './ApplicationComponents/Dashboard/index';
import {GameboardComponent} from './ApplicationComponents/Gameboard/index';
import {ProfileComponent} from './ApplicationComponents/Profile/index';
import {SettingsComponent} from './ApplicationComponents/Settings/index';


import { SocketFunctions } from './Services/WebSocket/SocketFunctions/SocketFunctions';
import { SocketIoModule } from 'ng-socket-io';
import { AppSocket } from './Services/WebSocket/AppSocket';

import { DataRouteManager } from './Services/WebSocket/DataRouteManager';
import { AppConfig } from '../Utilities/AppConfig';
import { AppData } from './Services/WebSocket/AppData';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';

import {ProfileController} from './Services/WebSocket/RouteService/ProfileController'

import { NgCircleProgressModule } from 'ng-circle-progress';
import {RemainTimePipe} from './Filters/RemainTimePipe';

//UserService

import {
    ProfileService,
    UserService,
    GroupMessageService,
    MenuService,
    MessageService,
    NotificationService,
    ChatBoxService,
    ChatService,
    BoxControlService,
    SocketManager,
    HttpClientWraper
} from './Services/index';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SocketIoModule,
        routing,
        HttpClientModule,
        NgCircleProgressModule.forRoot({})
    ],
    declarations: [
        RemainTimePipe,

        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ChoosePasswordComponent,
        PhoneNumberComponent,
        VerifyEmailComponent,
        RecoverAccountComponent,
        LayoutComponent,
        HeaderComponent,
        LeftMenuComponent,
        ContentPlaceholderComponent,
        FooterComponent,
        RightMenuComponent,
        ChatComponent,
        PopOverMenuComponent,
        TreeComponent,
        BoxComponent,
        ChatMessageListComponent,
        ChatProfileListComponent,
        TreeComponent,
        BoxComponent,
        DropdownMenuComponent,
        MediumListComponent,
        SimpleListComponent,

        AccountComponent,
        DashboardComponent,
        GameboardComponent,
        ProfileComponent,
        SettingsComponent
    ],
    providers: [
        AuthGuard,
        UserService,
        GroupMessageService,
        HttpClientModule,
        DataRouteManager,
        AppSocket,
        SocketManager,
        // providers used to create fake backend
        MockBackend,
        BaseRequestOptions,
        ProfileController,
        //My services
        SocketFunctions,
        ProfileService,
        MenuService,
        AppConfig,
        MessageService,
        NotificationService,
        ChatService,
        ChatBoxService,
        BoxControlService,
        HttpClientWraper,
        
        //Global values
        AppData,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }