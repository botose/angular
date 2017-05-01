import {Component} from '@angular/core';
import {City} from './cities/City';
import {CityService} from './city.service';

@Component({
  selector: 'suggestion-input',
  templateUrl: `app/suggestion-input.html`
})

export class SuggestionInput {
  cityTypes = ['City', 'MultyCity', 'Village'];
  cities: City[];
  model = new City(null, '', null, null);
  suggestion = '';
  submitted = false;

  constructor(cityService: CityService) {
    this.cities = cityService.getCities();
  }

  onKey(value: string) { // without type info
    this.suggestion = '';

    for (const city of this.cities) {
      const cityName = city.name;
      if (cityName.includes(value)) {
        if (this.suggestion === '') {
          this.suggestion += ' ' + cityName;
        } else {
          this.suggestion += ', ' + cityName;
        }
      }
    }
  }

  onEnter() {
    let found = false;
    for (let i = 0 ; i < this.cities.length ; ++i) {
      if (this.cities[i].name === this.model.name) {
        found = true;
      }
    }
    if (!found) {
      const newModel = new City(this.cities.length, this.model.name, this.model.postNumber, this.model.type);
      this.cities.push(newModel);
      this.model.type = null;
      this.model.postNumber = null;
      this.model.name = '';
    }
  }

  onSubmit() { this.submitted = true; console.log('SUBMIT'); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.cities); }
}
