import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { IItems } from '../interface/items';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchQuery!: string;

  page = 1;

  limit = 10;

  movies!: IItems[];

  errorMessage!: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.movies = this.searchService.getPreviousSearchResult();
  }

  private unsubscribe$ = new Subject<void>();

  searchMovies(): void {
    this.dataService
      .searchMovie(this.searchQuery, this.page, this.limit)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          if (response) {
            this.movies = response.docs;
          }
          this.searchService.setPreviousSearchResult(this.movies);
        },
        error: (error) => {
          this.errorMessage = 'Произошла ошибка при выполнении запроса';
          console.log('Ошибка при выполнении запроса:', error);
        },
        complete: () => {
          if (this.movies.length === 0) {
            this.errorMessage = 'Фильмы по вашему запросу не найдены';
          }
        },
      });
  }

  openMovieDetails(movieId: number) {
    this.searchService.setPreviousSearchResult(this.movies);
    this.router.navigate(['/movie', movieId]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
