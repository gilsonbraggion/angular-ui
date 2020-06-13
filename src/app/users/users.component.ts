import { User } from './../model/user.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})


export class UsersComponent implements OnInit {

  users: User[];

    cols: any[];

    constructor(private usersService: UsersService) { }

    ngOnInit() {

      this.usersService.buscarUsuarios().subscribe((usuarios: User[]) =>  {

        this.users = usuarios;

      });

      this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'username', header: 'Username' },
            { field: 'email', header: 'Email' },
            { field: 'website', header: 'Website' }
        ];
    }

}
