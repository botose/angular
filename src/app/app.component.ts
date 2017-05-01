import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Hero} from './cities/hero';

@Component({
  selector: 'my-app',
  templateUrl: `app/myFirstTemplate.html`
})
export class AppComponent  {
  @Input() color = 'black';
  @Output() colorChangeEvent = new EventEmitter<string>();
  title = 'Tour of Heroes';
  hero = 'Windstorm';
  heroes = [
    new Hero(0, 'Solomon'),
    new Hero(1, 'Peter'),
    new Hero(2, 'Judas')
  ];
  selectableColors = ['black', 'red', 'green', 'blue', 'yellow'];

  colorChange(newColor: string) {
    console.log('COLOR CHANGE!');
    this.color = newColor;
    this.colorChangeEvent.emit(this.color);
  }
}
