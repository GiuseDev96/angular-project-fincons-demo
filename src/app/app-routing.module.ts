import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BeerListComponent,
  },
  {
    path: 'add',
    component: BeerFormComponent,
  },
  {
    path: '**',
    component: BeerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
