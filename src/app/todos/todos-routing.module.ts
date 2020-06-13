import { TodosComponent } from './todos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const rotasTodos: Routes = [
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotasTodos)
  ]
})
export class TodosRoutingModule { }
