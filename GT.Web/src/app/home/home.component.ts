import { Component, OnInit } from '@angular/core';

import { IUser } from '../Services/WebSocket/Models';
import { UserService } from '../Services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser:IUser;
    users:IUser[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    }
}