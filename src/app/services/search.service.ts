import { Injectable } from '@angular/core';
import { IItems } from '../interface/items';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  previousSearchResult!: IItems[];

  setPreviousSearchResult(result: IItems[]) {
    this.previousSearchResult = result;
  }

  getPreviousSearchResult() {
    return this.previousSearchResult;
  }
}
