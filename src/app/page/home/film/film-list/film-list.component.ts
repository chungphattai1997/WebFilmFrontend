import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  viewStatus: boolean = true;
  listCategory = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.listCategory = res;
    })
  }

}
