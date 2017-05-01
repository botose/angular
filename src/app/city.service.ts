import { Injectable } from '@angular/core';

import { CITIES } from './cities/mock-cities';
import {Logger} from './logger.service';

@Injectable()
export class CityService {
  constructor(private logger: Logger, private isMocked: boolean) { }
  getCities = () => {
    if (!this.isMocked) {
      this.logger.log('Data should be not mocked');
    }
    this.logger.log('Incoming city data');
    return CITIES;
  };
}
