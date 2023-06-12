import { NgModule } from '@angular/core';
// eslint-disable-next-line import/named
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
