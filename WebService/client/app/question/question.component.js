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
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(http, config, route, router) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.questionReady = false;
        this.isMarked = false;
        // public sampleData: any;
        this.url = "";
        this.newId = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.url = '/question/' + this.currentUser.id + '/' + this.route.snapshot.paramMap.get('id');
        this.myAnnotationUrl = config.apiUrl + '/marking/' + this.currentUser.id + '/' + this.route.snapshot.paramMap.get('id');
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.questionReady = false;
                http.get(config.apiUrl + _this.url).subscribe(function (result) {
                    _this.question = result.json();
                    _this.questionReady = true;
                    _this.isMarked = result.json().unMarkPost != "Not marked yet";
                }, function (error) { return console.error(error); });
            }
        });
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.goToQuestion = function (id) {
        //this.router.navigate(['']);
        this.router.navigate(['/question', id]);
        this.url = '/question/' + this.currentUser.id + '/' + id;
    };
    QuestionComponent.prototype.markThis = function () {
        var _this = this;
        var AddMarkingUrl = "/marking/" + this.currentUser.id + '/' + this.route.snapshot.paramMap.get('id');
        var body = "";
        this.http
            .post(this.config.apiUrl + AddMarkingUrl, body)
            .subscribe(function (data) {
            _this.isMarked = true;
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    QuestionComponent.prototype.unMarkThis = function () {
        var _this = this;
        var deleteMarkingUrl = "/marking/" + this.currentUser.id + '/' + this.route.snapshot.paramMap.get('id');
        var body = "";
        this.http
            .delete(this.config.apiUrl + deleteMarkingUrl, body)
            .subscribe(function (data) {
            _this.isMarked = false;
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    QuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question',
            templateUrl: './question.component.html',
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map