import { Component, OnInit } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  constructor(private beerService: BeerService) {
    this.beers = this.beerService.getBeersList();
  }
  //beers: Beer[] = this.beerService.getBeersList();

  ngOnInit() {}
}
