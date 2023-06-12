import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';
import { Subject, takeUntil } from 'rxjs';
import { IName, IPerson } from '../interface/filmChange';
import { IMovieData } from '../interface/allFilmData';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie!: IMovieData;

  firstFivePersons!: IPerson[];

  country!: IName[];

  genres!: IName[];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      const id = Number(movieId);
      this.dataService
        .getMovieById(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          this.movie = response;
          this.firstFivePersons = this.movie.persons.slice(0, 5);
          this.country = this.movie.countries;
          this.genres = this.movie.genres;
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getGenresString(genres: IName[]): string {
    return genres.map((genr) => genr.name).join(', ');
  }

  getCountryString(country: IName[]): string {
    return country.map((ctr) => ctr.name).join(', ');
  }

  goBack() {
    this.router.navigate(['/']);
    const previousSearchResult = this.searchService.getPreviousSearchResult();
    this.searchService.setPreviousSearchResult(previousSearchResult);
  }
}
