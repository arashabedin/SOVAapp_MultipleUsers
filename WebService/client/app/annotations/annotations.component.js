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
var AnnotationsComponent = /** @class */ (function () {
    function AnnotationsComponent(http, config, route, router) {
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.currentEdit = "null";
        this.isNewAnnotation = false;
        this.annotationBody = "";
    }
    AnnotationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAnnotationsData().subscribe(function (result) {
            _this.annotations = result.json();
        }, function (error) { return console.error(error); });
    };
    AnnotationsComponent.prototype.getAnnotationsData = function () {
        return this.http.get(this.Url);
    };
    AnnotationsComponent.prototype.startEditing = function (editAnnotation) {
        this.currentEdit = editAnnotation;
    };
    AnnotationsComponent.prototype.addAnottation = function () {
        this.annotationBody = "";
        this.isNewAnnotation = true;
    };
    AnnotationsComponent.prototype.abortAnnotation = function () {
        this.annotationBody = "";
        this.isNewAnnotation = false;
    };
    AnnotationsComponent.prototype.createAnnotation = function (addUrl) {
        var _this = this;
        var body = JSON.stringify({
            annotationText: this.annotationBody,
            From: 0,
            To: 0
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers, body: body }); // Create a request option
        this.http
            .post(addUrl, body, options)
            .subscribe(function (data) {
            _this.isNewAnnotation = false;
            _this.getAnnotationsData().subscribe(function (result) {
                _this.annotations = result.json();
            }, function (error) { return console.error(error); });
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AnnotationsComponent.prototype.deleteAnnotation = function (removeAnnotation) {
        var _this = this;
        var deleteAnotationUrl = removeAnnotation;
        var body = "";
        this.http
            .delete(deleteAnotationUrl, body)
            .subscribe(function (data) {
            _this.getAnnotationsData().subscribe(function (result) {
                _this.annotations = result.json();
            }, function (error) { return console.error(error); });
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AnnotationsComponent.prototype.editAnnotation = function (myEditedText, editUrl) {
        var _this = this;
        var body = JSON.stringify({
            annotationText: myEditedText,
            From: 0,
            To: 0
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers, body: body }); // Create a request option
        this.http
            .put(editUrl, body, options)
            .subscribe(function (data) {
            _this.getAnnotationsData().subscribe(function (result) {
                _this.currentEdit = "";
                _this.annotations = result.json();
            }, function (error) { return console.error(error); });
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    __decorate([
        core_1.Input('parentdata'),
        __metadata("design:type", String)
    ], AnnotationsComponent.prototype, "Url", void 0);
    AnnotationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'annotations',
            templateUrl: './annotations.component.html',
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], AnnotationsComponent);
    return AnnotationsComponent;
}());
exports.AnnotationsComponent = AnnotationsComponent;
//# sourceMappingURL=annotations.component.js.map