import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {
  Movie: any = {
    "MaNhom": "GP06",
    "DanhGia": Math.round(Math.random() * 5),
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.Movie.NgayKhoiChieu = new Date().toISOString().substr(0, 10);
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
    if ($('#imgMovie')[0].files.length == 0) {
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
