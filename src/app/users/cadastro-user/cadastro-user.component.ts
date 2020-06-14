import { CadastroUserService } from './cadastro-user.service';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  usuarioAdicionado: User;
  constructor(private cadastroService: CadastroUserService) { }

  ngOnInit(): void {
    this.usuarioAdicionado = new User();
  }

  cadastrarUsuario(user: User) {

    this.cadastroService.adicionarUser(user).subscribe(
      res => console.log(this.usuarioAdicionado = res),
      err => console.log('Não Funcionou'),
    () => console.log('Final da função'));
  }

}
