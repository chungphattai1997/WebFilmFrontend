import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategory(): Observable<any> {
    let obs: Observable<any>;
    obs = this.http.get('./assets/data/category.json');
    return obs;
  }
  
}
