import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  sizeFont:number = 12;
  alert:boolean;
  alertLevel:number = 100;

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => this.heroe = this.heroesService.getHeroe(params['id']));
  }

  ngOnInit() {

  }

}
