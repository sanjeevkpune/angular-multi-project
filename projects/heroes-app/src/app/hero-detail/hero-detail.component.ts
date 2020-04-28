import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router'
import { HeroDataService } from '../hero-data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //hero : Hero;
  constructor(
    private route : ActivatedRoute,
    private heroService : HeroDataService,
    private location : Location
  ) { }

  ngOnInit(): void {
    // get the id parameter from the route and use heroService to get the hero and bind to view
    this.getHero();
  }

  @Input() selectedHero : Hero

  getHero():void{
    const heroID = this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(parseInt(heroID)).subscribe(hero => this.selectedHero =  hero);
   }
   onGoBack(): void{
     this.location.back();
   }
}
