import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  term:string;
  
  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private _router:Router) {
    this.activatedRoute.params.subscribe(params => this.term = params['term']);
  }

  ngOnInit() {
    this.heroes = this.heroesService.searchHeroes(this.term);
  }

  verHeroe(id:number){
    this._router.navigate(['/heroe',id]);
  }

}
