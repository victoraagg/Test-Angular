import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  name:string = 'Víctor Alonso';
  PI:number = 3.14159265358;
  number:number = 0.123;
  currency:number = 1234.5;
  object:any = {
    nombre: 'Víctor',
    apellidos: 'Alonso',
    edad: 500
  }
  promise = new Promise( (resolve,reject) => {
    setTimeout( ()=>resolve('Llegó el dato'),2000 );
  })
  date = new Date();
  active = false;

  constructor() { }

  ngOnInit() { }

}
