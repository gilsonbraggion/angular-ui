import { CadastroUserModule } from './users/cadastro-user/cadastro-user.module';
import { UsersModule } from './users/users.module';
import { PaginaInexistenteComponent } from './pagina-inexistente/pagina-inexistente.component';
import { SegundoModule } from './segundo/segundo.module';
import { PrimeiroModule } from './primeiro/primeiro.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosModule } from './todos/todos.module';


const routes: Routes = [
  {path: '**', component: PaginaInexistenteComponent},
  {path: '', redirectTo: '/primeiro', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PrimeiroModule,
    SegundoModule,
    TodosModule,
    UsersModule,
    CadastroUserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
