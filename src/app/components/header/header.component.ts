import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private _router:Router) { }

  searchHeroe(term:string){
    this._router.navigate(['/search',term]);
  }

}
