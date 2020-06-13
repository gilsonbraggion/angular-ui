import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const rotas: Routes = [
  { path: 'users', component: UsersComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotas)
  ]
})
export class UsersRoutingModule { }
