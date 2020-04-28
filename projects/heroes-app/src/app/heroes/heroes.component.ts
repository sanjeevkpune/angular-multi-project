import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDataService } from '../hero-data.service';
import { MessageSvcService } from '../message-svc.service';


// @Component marks this class as a component along with defining the metadata
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// export class means making it public
export class HeroesComponent implements OnInit {
  heroes : Hero[];
 // selectedHero : Hero;
  constructor(
    private heroDataService : HeroDataService,
    private msgService : MessageSvcService
  ) { }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
  // It's a good place to put initialization logic.
  ngOnInit(): void {
    this.getHeroes();
  }
  /*
onSelect(hero : Hero) : void {
 // window.alert("you clicked "+hero.name);
  this.selectedHero = hero;
  this.msgService.add("You selecte "+hero.name+" with ID-"+hero.id);
}
*/getHeroes() : void {
  this.heroDataService.getHeroes().subscribe(heroes => this.heroes=heroes);
}
}
