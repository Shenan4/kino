import { Injectable } from '@angular/core';
import { IMovie } from '../interface/items';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  previousSearchResult!: any[]; 

  constructor() { }
  setPreviousSearchResult(result: IMovie[]) {
    this.previousSearchResult = result
  }

  getPreviousSearchResult() {
    return this.previousSearchResult
  }
}
