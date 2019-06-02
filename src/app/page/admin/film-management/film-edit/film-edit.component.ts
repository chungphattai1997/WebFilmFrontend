import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {
  Movie: any = {};
  constructor(
    private activedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(idMovie => {
      // console.log(idMovie.id) 
      this.getMovieById(idMovie.id);
    })
  }
  getMovieById(id) {
    this.movieService.chiTietPhim(id).subscribe(data => {
      this.Movie = data;
      console.log(data);
      this.Movie.NgayKhoiChieu = this.Movie.NgayKhoiChieu.toString().substr(0, 10);
    })
  }

  validate() {
    if (!this.Movie.MaPhim) {
      return false;
    }
    if (!this.Movie.TenPhim) {
      return false;
    }
    if (!this.Movie.NgayKhoiChieu) {
      return false;
    }
    if (!this.Movie.MoTa) {
      return false;
    }

    if (!this.Movie.Trailer) {
      return false;
    }
    return true;
  }

  onCancel() {
    this.router.navigate(['/film-management']);
  }
}
