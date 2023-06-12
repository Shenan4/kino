import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IItems } from '../interface/items';
import { Observable, map } from 'rxjs';
import { IMovieData } from '../interface/allFilmData';
import { IMovie } from '../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrlSearch = 'https://api.kinopoisk.dev/v1.2/';

  private apiUrlget = 'https://api.kinopoisk.dev/v1.3/';

  constructor(private http: HttpClient) {}

  searchMovie(query?: string, page?: number, limit?: number): Observable<IMovie> {
    const url = `${this.apiUrlSearch}movie/search?page=${page}&limit=${limit}&query=${query}`;
    const headers = new HttpHeaders().set('X-API-KEY', 'BPWBSBA-SHZMJYX-MJ98CA8-QN9QSWZ');
    return this.http.get<IMovie>(url, { headers }).pipe(
      map((res: IMovie) => {
        const filterDocs = res.docs.filter((doc: IItems) => doc.name !== '');
        filterDocs.map((rat: IItems) => {
          return (rat.rating = Math.round(rat.rating * 10) / 10);
        });
        return { ...res, docs: filterDocs };
      }),
    );
  }

  getMovieById(movieId: number): Observable<IMovieData> {
    const url = `${this.apiUrlget}movie/${movieId}`;
    const headers = new HttpHeaders().set('X-API-KEY', 'BPWBSBA-SHZMJYX-MJ98CA8-QN9QSWZ');
    return this.http.get<IMovieData>(url, { headers });
  }
}
