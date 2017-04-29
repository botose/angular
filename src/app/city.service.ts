import { Injectable } from '@angular/core';

import { CITIES } from './cities/mock-cities';
import {Logger} from './logger.service';

@Injectable()
export class CityService {
  constructor(private logger: Logger) { }
  getCities = () => {
    this.logger.log('Incoming city data');
    return CITIES;
  };
}
