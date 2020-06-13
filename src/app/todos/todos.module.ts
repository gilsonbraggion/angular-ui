import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule
  ]
})
export class TodosModule { }
