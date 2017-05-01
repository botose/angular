import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent }  from './test-button.component';
import { SuggestionInput } from './suggestion-input.component';
import { Logger } from './logger.service';
import { cityServiceProvider } from './city.service.provider';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ClickMeComponent, SuggestionInput ],
  providers: [ Logger, cityServiceProvider ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
