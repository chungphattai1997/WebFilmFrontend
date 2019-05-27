import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  checkLogin(taikhoan, matkhau) {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    const header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    let obs: Observable<any>;
    obs = this.http.post(linkApi, {}, { headers: header });
    return obs;
  }
}
