import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero; // Héro sélectionné lors du clic

  //hero: Hero = {
  //  id: 1,
  //  name: 'Windstorm'
  // };

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero)
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
