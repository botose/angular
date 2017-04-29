import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent }  from './test-button.component';
import { SuggestionInput } from './suggestion-input.component';
import {CityService} from './city.service';
import {Logger} from './logger.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ClickMeComponent, SuggestionInput ],
  providers: [ CityService, Logger ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
