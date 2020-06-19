import { PaginaInexistenteComponent } from './pagina-inexistente/pagina-inexistente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '**', component: PaginaInexistenteComponent},
  {path: '', redirectTo: '/primeiro', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
