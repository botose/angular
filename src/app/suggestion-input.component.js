"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var City_1 = require("./cities/City");
var city_service_1 = require("./city.service");
var SuggestionInput = (function () {
    function SuggestionInput(cityService) {
        this.cityTypes = ['City', 'MultyCity', 'Village'];
        this.model = new City_1.City(null, '', null, null);
        this.suggestion = '';
        this.submitted = false;
        this.cities = cityService.getCities();
    }
    SuggestionInput.prototype.onKey = function (value) {
        this.suggestion = '';
        for (var index in this.cities) {
            var cityName = this.cities[index].name;
            if (cityName.includes(value)) {
                if (this.suggestion === '') {
                    this.suggestion += ' ' + cityName;
                }
                else {
                    this.suggestion += ', ' + cityName;
                }
            }
        }
    };
    SuggestionInput.prototype.onEnter = function () {
        var found = false;
        for (var i = 0; i < this.cities.length; ++i) {
            if (this.cities[i].name === this.model.name) {
                found = true;
            }
        }
        if (!found) {
            var newModel = new City_1.City(this.cities.length, this.model.name, this.model.postNumber, this.model.type);
            this.cities.push(newModel);
            this.model.type = null;
            this.model.postNumber = null;
            this.model.name = '';
        }
    };
    SuggestionInput.prototype.onSubmit = function () { this.submitted = true; console.log('SUBMIT'); };
    Object.defineProperty(SuggestionInput.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.cities); },
        enumerable: true,
        configurable: true
    });
    return SuggestionInput;
}());
SuggestionInput = __decorate([
    core_1.Component({
        selector: 'suggestion-input',
        templateUrl: "app/suggestion-input.html"
    }),
    __metadata("design:paramtypes", [city_service_1.CityService])
], SuggestionInput);
exports.SuggestionInput = SuggestionInput;
//# sourceMappingURL=suggestion-input.component.js.map