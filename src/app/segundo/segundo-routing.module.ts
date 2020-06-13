import { SegundoComponent } from './segundo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const rotasSegundo: Routes = [
  { path: 'segundo', component: SegundoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotasSegundo)
  ]
})
export class SegundoRoutingModule { }
