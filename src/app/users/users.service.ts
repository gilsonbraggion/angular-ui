import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private REST_API_SERVER = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  buscarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.REST_API_SERVER);
  }
}
