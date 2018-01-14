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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_config_1 = require("../app.config");
var CustomizationComponent = CustomizationComponent_1 = (function () {
    function CustomizationComponent(http, config, route, router) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.startedEditingLimit = false;
        this.startedEditingTags = false;
        this.loading = true;
        // public sampleData: any;
        this.url = '/customization/';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                http.get(config.apiUrl + _this.url + _this.currentUser.id).subscribe(function (result) {
                    _this.customization = result.json();
                    _this.loading = false;
                }, function (error) { return console.error(error); });
            }
        });
    }
    CustomizationComponent.prototype.ngOnInit = function () {
    };
    CustomizationComponent.prototype.currentpostLimitToedit = function (newPostlimit) {
        if (!this.startedEditingLimit) {
            this.newPostlimit = newPostlimit;
            this.startedEditingLimit = true;
        }
    };
    CustomizationComponent.prototype.currentTagsToedit = function (currentFavortieTags) {
        if (!this.startedEditingTags) {
            this.newCustomeTags = currentFavortieTags.join(',');
            this.startedEditingTags = true;
        }
    };
    CustomizationComponent.prototype.saveCustomeField = function () {
        var _this = this;
        var NewCustomeUrl = this.config.apiUrl + "/customization/";
        var body = JSON.stringify({
            UserName: this.currentUser.username,
            FavortieTags: this.newCustomeTags.split(","),
            PostLimit: this.newPostlimit
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers, body: body }); // Create a request option
        this.loading = true;
        this.http
            .post(NewCustomeUrl, body, options)
            .subscribe(function (data) {
            _this.http.get(_this.config.apiUrl + _this.url + _this.currentUser.id).subscribe(function (result) {
                _this.loading = false;
                _this.customization = result.json();
            }, function (error) { return console.error(error); });
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    return CustomizationComponent;
}());
CustomizationComponent = CustomizationComponent_1 = __decorate([
    core_1.NgModule({
        declarations: [CustomizationComponent_1],
        bootstrap: [CustomizationComponent_1]
    }),
    core_1.Component({
        moduleId: module.id,
        selector: 'customization',
        templateUrl: './customization.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
], CustomizationComponent);
exports.CustomizationComponent = CustomizationComponent;
var CustomizationComponent_1;
//# sourceMappingURL=customization.component.js.map