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
var jcloud_component_1 = require("../jcloud/jcloud.component");
var app_config_1 = require("../app.config");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(http, config, route, router) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.Url = this.route.snapshot.queryParams["url"];
        this.searchText = '';
        this.isSearching = false;
        this.isSearched = false;
        this.body = "";
        //$('.linked_posts_title').on('click.collapse-next.data-api', '[data-toggle=collapse-next]', function () {
        //    var $target = $(this).parent().next()
        //    $target.data('collapse') ? $target.collapse('toggle') : $target.collapse('toggle')
        //});
        this.searches = {};
        this.isSearching = true;
        var pageNumber = this.route.snapshot.queryParams["page"];
        if (pageNumber == null) {
            this.isSearching = false;
        }
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
            _this.isSearching = false;
            _this.searches = result.json();
        }, function (error) { return console.error(error); });
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
            }
        });
    }
    SearchComponent_1 = SearchComponent;
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.config.apiUrl + '/searchhistory').subscribe(function (result) {
            _this.searchHistory = result.json();
            setTimeout(function () {
                $('.linked_posts_title,#linkposts_button').click(function () {
                    $("#links").slideToggle();
                });
            }, 500);
        }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.startSearching = function () {
        var _this = this;
        this.isSearched = true;
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: { searchText: this.searchText, page: 0 } });
        this.searches = {};
        var pageNumber = this.route.snapshot.queryParams["page"];
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
            _this.isSearching = false;
            _this.searches = result.json();
        }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.searchItAgain = function (text) {
        var _this = this;
        this.isSearched = true;
        this.isSearching = true;
        this.searchText = text;
        this.router.navigate(['/search'], { queryParams: { searchText: text, page: 0 } });
        this.searches = {};
        var pageNumber = this.route.snapshot.queryParams["page"];
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
            _this.isSearching = false;
            _this.searches = result.json();
        }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.goToPrev = function (url, pageNum) {
        var _this = this;
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: { searchText: this.searchText, page: pageNum - 1 } });
        this.newPageUrl = url;
        this.searches = {};
        this.isSearching = true;
        var pageNumber = this.route.snapshot.queryParams["page"];
        if (pageNumber == null) {
            this.isSearching = false;
        }
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
            _this.isSearching = false;
            _this.searches = result.json();
        }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.goToNext = function (url, pageNum) {
        var _this = this;
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: { searchText: this.searchText, page: pageNum + 1 } });
        this.newPageUrl = url;
        this.searches = {};
        this.isSearching = true;
        var pageNumber = this.route.snapshot.queryParams["page"];
        if (pageNumber == null) {
            this.isSearching = false;
        }
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
            _this.isSearching = false;
            _this.searches = result.json();
        }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.goToQuestion = function (id) {
        this.router.navigate(['/question', id]);
    };
    SearchComponent = SearchComponent_1 = __decorate([
        core_1.NgModule({
            declarations: [SearchComponent_1, jcloud_component_1.JcloudComponent],
            bootstrap: [SearchComponent_1]
        }),
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: './search.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
    var SearchComponent_1;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map