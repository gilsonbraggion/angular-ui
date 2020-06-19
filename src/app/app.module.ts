import { EventosModule } from './eventos/eventos.module';
import { CadastroUserModule } from './users/cadastro-user/cadastro-user.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { SegundoModule } from './segundo/segundo.module';
import { PrimeiroModule } from './primeiro/primeiro.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeiroModule,
    SegundoModule,
    TodosModule,
    UsersModule,
    CadastroUserModule,
    EventosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
