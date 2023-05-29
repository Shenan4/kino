import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interface/items';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery!: string;
  page = 1;
  limit = 10
  movies!: IMovie[];
  value = '';
  errorMessage!: string;

  constructor(private dataService: DataService, private router: Router, private searchService: SearchService) { }

  searchMovies(): void {
    this.dataService.searchMovie(this.searchQuery, this.page, this.limit)
      .subscribe({
        next: response => {
          if(response.name = true) {
            this.movies = response
          }
          this.searchService.setPreviousSearchResult(this.movies);
          
        },
        error: error => {
          this.errorMessage = 'Произошла ошибка при выполнении запроса'
          console.log('Ошибка при выполнении запроса:', error)
        },
        complete: () => {
          if (this.movies.length === 0) {
            this.errorMessage = 'Фильмы по вашему запросу не найдены'
          }
        }
      })
  }

  ngOnInit(): void {
    this.movies = this.searchService.getPreviousSearchResult();
  }

  openMovieDetails(movieId: number) {
    this.searchService.setPreviousSearchResult(this.movies)
    this.router.navigate(['/movie', movieId]);
  }

}
