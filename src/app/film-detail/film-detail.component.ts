import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  film: any;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Convertir l'ID en nombre
      const filmId = +params['id'];
      this.film = this.filmService.getFilmById(filmId);
    });
  }

  goBackToList() {
    this.router.navigate(['/']);
  }
}
