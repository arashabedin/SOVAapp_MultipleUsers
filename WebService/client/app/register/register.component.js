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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var index_1 = require("../_services/index");
var app_config_1 = require("../app.config");
var RegisterComponent = (function () {
    function RegisterComponent(router, http, config, userService, alertService) {
        this.router = router;
        this.http = http;
        this.config = config;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.customeFieldUrl = '/customization/';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            //adding customefield
            var NewCustomeUrl = _this.config.apiUrl + "/customization/";
            var body = JSON.stringify({
                UserName: _this.model.username,
                FavortieTags: _this.model.tags.split(","),
                PostLimit: 12
            });
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
            var options = new http_1.RequestOptions({ headers: headers, body: body }); // Create a request option
            _this.loading = true;
            _this.http
                .post(NewCustomeUrl, body, options)
                .subscribe(function (data) {
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        app_config_1.AppConfig,
        index_1.UserService,
        index_1.AlertService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map