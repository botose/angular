import {Logger} from './logger.service';
import {CityService} from './city.service';

let cityServiceFactory = (logger: Logger, isMocked: boolean) => {
  return new CityService(logger, isMocked);
};

export let cityServiceProvider = {
  provide: CityService,
  useFactory: cityServiceFactory,
  deps: [Logger]
};
