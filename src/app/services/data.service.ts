import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IMovie } from '../interface/items';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private apiUrlSearch = 'https://api.kinopoisk.dev/v1.2/';
private apiUrlget = 'https://api.kinopoisk.dev/v1.3/';
constructor(private http: HttpClient) { }


  searchMovie(query?: any, page?: any, limit?: any): Observable<any> {
    const url = `${this.apiUrlSearch}movie/search?page=${page}&limit=${limit}&query=${query}`
    const headers = new HttpHeaders().set('X-API-KEY', 'BPWBSBA-SHZMJYX-MJ98CA8-QN9QSWZ')
    return this.http.get<any>(url, {headers})
    .pipe(
      map((res: any) => {
        const filterDocs = res.docs.filter((doc: any) => doc.name !== '')
        filterDocs.map((rat: any) => {
          rat.rating = Math.round(rat.rating * 10) / 10;
          return rat;
        });
        console.log(filterDocs);
        return filterDocs;
      })
    );
    }

  getMovieById(movieId: number): Observable<any> {
    const url = `${this.apiUrlget}movie/${movieId}`;
    const headers = new HttpHeaders().set('X-API-KEY', 'BPWBSBA-SHZMJYX-MJ98CA8-QN9QSWZ');
    return this.http.get<any>(url, { headers })
  }
}
