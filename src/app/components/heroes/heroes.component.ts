import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class  HeroesComponent implements OnInit {

  heroes: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService, private router: Router ) {
    // console.log('constructor');
  }

  ngOnInit(): void {
    // console.log('Heroes vacíos');
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

 // tslint:disable-next-line: typedef
  verHeroe( idx: number ){
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
    
  }

}
