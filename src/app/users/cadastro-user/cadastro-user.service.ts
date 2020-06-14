import { Observable } from 'rxjs';
import { User } from './../../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroUserService {

  private REST_API_SERVER = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  adicionarUser(user: User): Observable<User> {

    return this.http.post<User>(this.REST_API_SERVER, JSON.stringify(user));
  }
}
