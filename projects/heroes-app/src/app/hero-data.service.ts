import { Injectable } from '@angular/core';
import { HEROES} from './mock-heroes'
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageSvcService } from './message-svc.service';
@Injectable({
  providedIn: 'root'
})
export class HeroDataService {

  constructor(
    private messageService : MessageSvcService
  ) { }
  getHeroes() : Observable<Hero[]>{
    // fetch HEROES from an external service
    // send a message about the request status
    this.messageService.add("HeroService :: Fetched Heroes from the Web-Service");
    return of(HEROES);
  }

  getHero(id : number) : Observable<Hero>{
    //let heroesList : Hero[] = [];
    //this.getHeroes().subscribe(heroes=> heroesList = heroes);
    this.messageService.add('HeroService :: Fetched Hero with id='+id);
    return of(HEROES.find(hero=> hero.id == id));
    //return of(heroesList.find(hero=> hero.id == id));
  }
}
