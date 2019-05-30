import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-management',
  templateUrl: './film-management.component.html',
  styleUrls: ['./film-management.component.css']
})
export class FilmManagementComponent implements OnInit {

  movieArray: Array<any> = [];
  idFilm: number;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.layDanhSachPhim().subscribe((data) => {
      this.movieArray = data;
      console.log(this.movieArray);
    })
  }


}
