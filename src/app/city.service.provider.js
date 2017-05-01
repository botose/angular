"use strict";
var logger_service_1 = require("./logger.service");
var city_service_1 = require("./city.service");
var cityServiceFactory = function (logger, isMocked) {
    return new city_service_1.CityService(logger, isMocked);
};
exports.cityServiceProvider = {
    provide: city_service_1.CityService,
    useFactory: cityServiceFactory,
    deps: [logger_service_1.Logger]
};
//# sourceMappingURL=city.service.provider.js.map