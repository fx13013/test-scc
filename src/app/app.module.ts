import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  declarations: [AppComponent, FilmListComponent, FilmDetailComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
