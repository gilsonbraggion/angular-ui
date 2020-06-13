import { SegundoRoutingModule } from './segundo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegundoComponent } from './segundo.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [SegundoComponent],
  imports: [
    CommonModule,
    CalendarModule,
    BrowserAnimationsModule,
    BrowserModule,
    SegundoRoutingModule
  ]
})
export class SegundoModule { }
