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
var JcloudComponent = /** @class */ (function () {
    function JcloudComponent(http, config, route, router) {
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
    }
    JcloudComponent.prototype.ngOnInit = function () {
        var _this = this;
        var CssId = "#" + this.id;
        var Url = this.config.apiUrl + '/TermAsResult/' + this.id;
        this.http.get(Url).subscribe(function (result) {
            _this.jclould = result.json();
            $(CssId).jQCloud(_this.jclould);
        }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.Input("parentdata"),
        __metadata("design:type", String)
    ], JcloudComponent.prototype, "id", void 0);
    JcloudComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jcloud',
            templateUrl: './jcloud.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], JcloudComponent);
    return JcloudComponent;
}());
exports.JcloudComponent = JcloudComponent;
//# sourceMappingURL=jcloud.component.js.map