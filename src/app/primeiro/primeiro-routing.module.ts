import { PrimeiroComponent } from './primeiro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const rotasPrimeiro: Routes = [
  { path: 'primeiro', component: PrimeiroComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotasPrimeiro)
  ]
})
export class PrimeiroRoutingModule { }
