import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    TableModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    UsersRoutingModule,
    TabViewModule,
    RouterModule
  ]
})
export class UsersModule { }
