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
var index_1 = require("../_services/index");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_config_1 = require("../app.config");
var HomeComponent = (function () {
    function HomeComponent(http, config, userService, route, router) {
        this.http = http;
        this.config = config;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.suggestedQurl = '/start';
        this.customizationUrl = '/customization';
        this.postId = 1;
        this.QNotloaded = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        //new
        this.http.get(this.config.apiUrl + this.suggestedQurl).subscribe(function (result) {
            _this.suggestedQuestions = result.json().recommendedQuestions;
            _this.QNotloaded = false;
        }, function (error) { return console.error(error); });
        this.http.get(this.config.apiUrl + this.customizationUrl).subscribe(function (result) {
            _this.customization = result.json();
        }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    //new
    HomeComponent.prototype.goToQuestion = function (id) {
        this.router.navigate(['/question', id]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, index_1.UserService, router_1.ActivatedRoute, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map