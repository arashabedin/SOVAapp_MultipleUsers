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
var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, config, route, router) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.url = '/user?page=' + this.route.snapshot.queryParams["page"] + "&pageSize=12";
        http.get(config.apiUrl + this.url).subscribe(function (result) {
            _this.users = result.json();
        }, function (error) { return console.error(error); });
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.users = {};
                var pageNumber = _this.route.snapshot.queryParams["page"];
                console.log(pageNumber);
                http.get(config.apiUrl + '/user?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
                    _this.users = result.json();
                }, function (error) { return console.error(error); });
            }
        });
    }
    UsersComponent.prototype.goToNextPage = function (url, pageNum) {
        this.url = url;
        this.router.navigate(['/users'], { queryParams: { page: pageNum + 1 } });
    };
    UsersComponent.prototype.goToPrevPage = function (url, pageNum) {
        this.url = url;
        this.router.navigate(['/users'], { queryParams: { page: pageNum - 1 } });
    };
    UsersComponent.prototype.goToQuestion = function (id) {
        this.router.navigate(['/question', id]);
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            templateUrl: './users.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map