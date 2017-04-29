import {Component} from '@angular/core';

@Component({
  selector: 'test-button',
  templateUrl: `app/test-button.html`
})

export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
