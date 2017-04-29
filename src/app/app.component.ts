import { Component } from '@angular/core';
import {Hero} from './cities/hero';

@Component({
  selector: 'my-app',
  templateUrl: `app/myFirstTemplate.html`
})
export class AppComponent  {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
  heroes = [
    new Hero(0, 'Solomon'),
    new Hero(1, 'Peter'),
    new Hero(2, 'Judas')
  ];
}
