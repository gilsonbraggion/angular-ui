import { PrimeiroComponent } from './primeiro.component';
import { PrimeiroRoutingModule } from './primeiro-routing.module';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [PrimeiroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeiroRoutingModule,
    AccordionModule
  ]
})
export class PrimeiroModule { }
