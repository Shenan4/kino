import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  // по поводу типизации, очень спешил, и так дедлайн горит, прошу прощения :)
  movie: any;
  firstFivePersons!: any[];
  country!: any[];
  genres!: any[]

  constructor(private route: ActivatedRoute,private dataService: DataService, private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      const id: number = Number(movieId) 
      this.dataService.getMovieById(id)
      .subscribe(response => {
        this.movie = response;
        this.firstFivePersons = this.movie.persons.slice(0, 5)
        this.country = this.movie.countries
        this.genres = this.movie.genres
      });
    }
  }

  getGenresString(genres: any[]): string {
    return genres.map(genr => genr.name).join(', ')
  }

  getCountryString(country: any[]): string {
    return country.map(country => country.name).join(', ')
  }

  goBack() {
    this.router.navigate(['/']);
    const previousSearchResult = this.searchService.getPreviousSearchResult();
    this.searchService.setPreviousSearchResult(previousSearchResult);
  }
}
