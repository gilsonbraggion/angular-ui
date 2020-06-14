import { CadastroUserRoutingModule } from './cadastro-user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { CadastroUserComponent } from './cadastro-user.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadastroUserComponent],
  imports: [
    CommonModule,
    CadastroUserRoutingModule,
    PanelModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class CadastroUserModule { }
