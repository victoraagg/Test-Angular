import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  label:string = '';

  constructor() { }

  ngOnInit() {
  }

  changeLabel(value:string){
    this.label = value;
  }

}
