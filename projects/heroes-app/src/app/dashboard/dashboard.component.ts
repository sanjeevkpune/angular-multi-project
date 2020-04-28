import { Component, OnInit } from '@angular/core';
import { HeroDataService } from '../hero-data.service';
import { Hero } from '../hero'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes : Hero[] = [];
  selectedHero : Hero;

  constructor(
    private heroDataservice : HeroDataService
  ) { }

  ngOnInit(): void {
    this.getTopFiveHeroes();
  }

  getTopFiveHeroes() : void {
    this.heroDataservice.getHeroes().subscribe(heroes => this.heroes=heroes.slice(1,5));
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
  
}
