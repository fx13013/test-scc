import { Injectable } from '@angular/core';
import { FILMS } from './films';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  // Import des films
  films = FILMS;

  constructor() {}

  getFilms() {
    return this.films;
  }

  getFilmById(id: number) {
    const film = this.films.find((film) => film.id === id);
    if (!film) throw new Error('Film not found');
    return film;
  }
}
