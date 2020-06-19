import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';

const rotasEventos: Routes = [
  { path: 'eventos', component: EventosComponent }
];

@NgModule({
  declarations: [EventosComponent],
  imports: [
    BrowserModule,
    PanelModule,
    FormsModule,
    AccordionModule,
    RouterModule.forChild(rotasEventos)
  ]
})
export class EventosModule { }
