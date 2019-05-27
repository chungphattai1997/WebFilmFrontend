import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUser() {
    let obs: Observable<any>;
    let url = 'http://localhost:8080/user/getall';
    obs = this.http.get(url);
    return obs;
  }

  checkLogin(username: string, password: string) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/login?username=${username}&password=${password}`;
    obs = this.http.get(url);
    return obs;
  }

  addUser(user: User) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/add`;
    obs = this.http.post(url, user);
    return obs;
  }

  updateUser(user: User) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/update`;
    obs = this.http.put(url, user);
    return obs;
  }

  deleteUser(username: string) {
    let obs: Observable<any>;
    let url = `http://localhost:8080/user/delete/${username}`;
    obs = this.http.delete(url);
    return obs;
  }
}
