import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';

const rotasEventos: Routes = [
  { path: 'eventos', component: EventosComponent }
];

@NgModule({
  declarations: [EventosComponent],
  imports: [
    BrowserModule,
    PanelModule,
    FormsModule,
    RouterModule.forChild(rotasEventos)
  ]
})
export class EventosModule { }
