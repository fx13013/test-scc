import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  films: any;
  currentPage: number = 1;
  filmsPerPage: number = 3;
  totalPages: number = Math.ceil(
    this.filmService.getFilms().length / this.filmsPerPage
  );
  searchForm = new FormControl('');

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.updateFilmList();
  }

  updateFilmList() {
    const startIndex = (this.currentPage - 1) * this.filmsPerPage;
    let filteredFilms = this.filmService.getFilms();

    // Filtrer les films en fonction de la recherche
    const searchTerm = this.searchForm.value?.trim().toLowerCase();
    if (!searchTerm) {
      this.films = this.filmService.getFilms();
    }

    if (searchTerm) {
      filteredFilms = filteredFilms.filter((film) =>
        film.title.toLowerCase().includes(searchTerm)
      );
    }

    this.films = filteredFilms.slice(
      startIndex,
      startIndex + this.filmsPerPage
    );
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilmList();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilmList();
    }
  }

  search() {
    // Valider la recherche lorsque le bouton est cliqué
    this.updateFilmList();
  }

  sortFilmsByTitle() {
    // TODO
  }
}
