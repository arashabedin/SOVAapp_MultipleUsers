webpackJsonp(["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./app/_directives/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var index_1 = __webpack_require__("./app/_services/index.ts");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("./app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [index_1.AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;


/***/ }),

/***/ "./app/_directives/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/_directives/alert.component.ts"));


/***/ }),

/***/ "./app/_guards/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./app/_guards/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/_guards/auth.guard.ts"));


/***/ }),

/***/ "./app/_services/alert.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;


/***/ }),

/***/ "./app/_services/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, config) {
        this.http = http;
        this.config = config;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./app/_services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/_services/alert.service.ts"));
__export(__webpack_require__("./app/_services/authentication.service.ts"));
__export(__webpack_require__("./app/_services/user.service.ts"));


/***/ }),

/***/ "./app/_services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + '/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.config.apiUrl + '/users', user, this.jwt());
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.config.apiUrl + '/users/' + id, this.jwt());
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./app/annotations/annotations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"annotations_box\" class=\"linked_posts\">\n    <div>\n        <span id=\"annotations_box_button\" data-toggle=\"collapse-next\" data-target=\"#Anott\"><h2>{{annotations.markingAnnotation.length}}</h2> <h2>Annotations</h2><span>&#9660;</span></span>\n    </div>\n        <div id=\"Anott\" class=\"collapse\">\n        <div *ngFor=\"let a of annotations.markingAnnotation\">\n            <div data-toggle=\"collapse\" class=\"annotations_text\">\n                Note: <div class=\"annot_text\" *ngIf=\"currentEdit != a.editAnnotation\" >{{a.annotationText}} </div>\n\n                <textarea  class=\"form-control myForm\" rows=\"5\" id=\"comment\"  *ngIf=\"currentEdit == a.editAnnotation\" [(ngModel)]=\"a.annotationText\" ></textarea>\n                <!--Delete-->\n                <span class=\"delete_annot\" (click) =\"deleteAnnotation(a.removeAnnotation)\">Delete</span>\n                <!--Edit-->\n                <span  class=\"edit_annot\" *ngIf=\"currentEdit != a.editAnnotation\" (click)=\"startEditing(a.editAnnotation)\"> Edit</span>\n                <!--Save-->\n                <span  class=\"edit_annot\"  *ngIf=\"currentEdit == a.editAnnotation\" (click)=\"editAnnotation(a.annotationText,a.editAnnotation)\">Save</span>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n\n<div id=\"AnnotButton\" (click)=\"addAnottation()\">\n\n    <span>&#9998;</span>\n\n</div>\n\n\n<div *ngIf=\"isNewAnnotation\">\n    <section id=\"annotation_box\">\n        <div id=\"triangle\"></div>\n        <span id=\"cancelAnnot\" (click)=\"abortAnnotation()\"> &#10005;</span>\n        <div><textarea id=\"annotation_text_field\" [(ngModel)]=\"annotationBody\" > </textarea></div>\n        <button id=\"annotation_submit_button\" class=\"page_button\" (click)=\"createAnnotation(annotations.addAnnotation)\"> <!--data-bind=\"click: createAnnotation.bind($data, annotationBody)\"-->Create Annotation</button>\n    </section>\n</div>\n\n"

/***/ }),

/***/ "./app/annotations/annotations.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
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
            moduleId: module.i,
            selector: 'annotations',
            template: __webpack_require__("./app/annotations/annotations.component.html"),
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], AnnotationsComponent);
    return AnnotationsComponent;
}());
exports.AnnotationsComponent = AnnotationsComponent;


/***/ }),

/***/ "./app/annotations/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/annotations/annotations.component.ts"));


/***/ }),

/***/ "./app/answers/answers.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h3>Answers</h3>\n<div *ngFor=\"let a of answers.data\">\n    <div class=\"each_answer\">\n        <div class=\"questions_user\"><span class=\"user_icon\"></span><span class=\"questions_user_name\">{{a.userName}}</span></div>\n        <br />\n        <span class=\"time_icon\"></span><span id=\"date\">{{a.creationDate}}</span>\n        <span class=\"answerscore\"><span class=\"score_sign\">&#x270C;</span><span>{{a.score}}</span></span>\n        <span class=\"answer_body\" [innerHtml]=\"a.body\" id=\"body\"></span>\n        <!--Comments-->\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-11 col-sm-offset-1 col-md-11 col-md-offset-1 col-lg-11 col-lg-offset-1\">\n                <comments  *ngIf='a.commentsUrl'  [parentdata]=\"a.commentsUrl\"></comments>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./app/answers/answers.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var AnswersComponent = /** @class */ (function () {
    function AnswersComponent(http, config, route) {
        this.http = http;
        this.config = config;
        this.route = route;
    }
    AnswersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAnswersData().subscribe(function (result) {
            _this.answers = result.json();
        }, function (error) { return console.error(error); });
    };
    AnswersComponent.prototype.getAnswersData = function () {
        return this.http.get(this.parentdata);
    };
    __decorate([
        core_1.Input('parentdata'),
        __metadata("design:type", String)
    ], AnswersComponent.prototype, "parentdata", void 0);
    AnswersComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'answers',
            template: __webpack_require__("./app/answers/answers.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute])
    ], AnswersComponent);
    return AnswersComponent;
}());
exports.AnswersComponent = AnswersComponent;


/***/ }),

/***/ "./app/answers/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/answers/answers.component.ts"));


/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n\n            <div id=\"main_component\" class=\"container-fluid\">\n\n                <router-outlet></router-outlet>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'app',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/app.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.apiUrl = 'http://localhost:5000/api';
    }
    return AppConfig;
}());
exports.AppConfig = AppConfig;
;


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var app_routing_1 = __webpack_require__("./app/app.routing.ts");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var index_1 = __webpack_require__("./app/_directives/index.ts");
var index_2 = __webpack_require__("./app/_guards/index.ts");
var index_3 = __webpack_require__("./app/_services/index.ts");
var index_4 = __webpack_require__("./app/navmenu/index.ts");
var index_5 = __webpack_require__("./app/home/index.ts");
var index_6 = __webpack_require__("./app/login/index.ts");
var index_7 = __webpack_require__("./app/register/index.ts");
var index_8 = __webpack_require__("./app/questions/index.ts");
var index_9 = __webpack_require__("./app/jcloud/index.ts");
var index_10 = __webpack_require__("./app/search/index.ts");
var index_11 = __webpack_require__("./app/question/index.ts");
var index_12 = __webpack_require__("./app/comments/index.ts");
var index_13 = __webpack_require__("./app/answers/index.ts");
var index_14 = __webpack_require__("./app/annotations/index.ts");
var index_15 = __webpack_require__("./app/users/index.ts");
var index_16 = __webpack_require__("./app/markings/index.ts");
var index_17 = __webpack_require__("./app/customization/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.AlertComponent,
                index_4.NavMenuComponent,
                index_5.HomeComponent,
                index_6.LoginComponent,
                index_7.RegisterComponent,
                index_8.QuestionsComponent,
                index_11.QuestionComponent,
                index_9.JcloudComponent,
                index_10.SearchComponent,
                index_12.CommentsComponent,
                index_13.AnswersComponent,
                index_14.AnnotationsComponent,
                index_15.UsersComponent,
                index_16.MarkingsComponent,
                index_17.CustomizationComponent
            ],
            providers: [
                app_config_1.AppConfig,
                index_2.AuthGuard,
                index_3.AlertService,
                index_3.AuthenticationService,
                index_3.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var index_1 = __webpack_require__("./app/_guards/index.ts");
var index_2 = __webpack_require__("./app/home/index.ts");
var index_3 = __webpack_require__("./app/login/index.ts");
var index_4 = __webpack_require__("./app/register/index.ts");
var index_5 = __webpack_require__("./app/questions/index.ts");
var index_6 = __webpack_require__("./app/search/index.ts");
var index_7 = __webpack_require__("./app/question/index.ts");
var index_8 = __webpack_require__("./app/users/index.ts");
var index_9 = __webpack_require__("./app/markings/index.ts");
var index_10 = __webpack_require__("./app/customization/index.ts");
var appRoutes = [
    { path: '', component: index_2.HomeComponent, canActivate: [index_1.AuthGuard] },
    { path: 'login', component: index_3.LoginComponent },
    { path: 'register', component: index_4.RegisterComponent },
    { path: 'questions', component: index_5.QuestionsComponent, canActivate: [index_1.AuthGuard] },
    { path: 'search', component: index_6.SearchComponent, canActivate: [index_1.AuthGuard] },
    { path: 'question/:id', component: index_7.QuestionComponent, canActivate: [index_1.AuthGuard] },
    { path: 'users', component: index_8.UsersComponent, canActivate: [index_1.AuthGuard] },
    { path: 'markings', component: index_9.MarkingsComponent, canActivate: [index_1.AuthGuard] },
    { path: 'customization', component: index_10.CustomizationComponent, canActivate: [index_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ "./app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"accordion-group\" *ngIf=\"comments.total\" >\n    <div class=\"accordion-heading\">\n        <div class=\"comments_opener accordion-toggle\" data-toggle=\"collapse-next\">\n            <span class=\"comments_total\" >{{comments.total}}</span>\n            <h3 id=\"comment_h1\">Comments</h3>\n            <span id=\"triangle_down\">&#9660;</span>\n        </div>\n    </div>\n\n    <div class=\"accordion-body collapse out\">\n\n        <div class=\"comments_main accordion-inner\" >\n            <div *ngFor=\"let c of comments.data\">\n\n                <div class=\"comments_block\">\n                    <div class=\"questions_user\"><span class=\"user_icon\"></span><span class=\"questions_user_name\">{{c.userName}}</span></div>\n                    <br />\n                    <span class=\"time_icon\"></span><span id=\"date\"> {{c.creationDate}}</span>\n                    <span class=\"answerscore\"><span class=\"score_sign\">&#x270C;</span><span>{{c.score}}</span></span>\n                    <span class=\"answer_body\"  [innerHtml]=\"c.body\" id=\"body\"></span>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./app/comments/comments.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
//npm install --save jquery
//npm install - D @types/jquery
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(http, config, route) {
        this.http = http;
        this.config = config;
        this.route = route;
    }
    CommentsComponent_1 = CommentsComponent;
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCommentsData().subscribe(function (result) {
            _this.comments = result.json();
        }, function (error) { return console.error(error); });
    };
    CommentsComponent.prototype.getCommentsData = function () {
        return this.http.get(this.parentdata);
    };
    __decorate([
        core_1.Input('parentdata'),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "parentdata", void 0);
    CommentsComponent = CommentsComponent_1 = __decorate([
        core_1.NgModule({
            declarations: [CommentsComponent_1],
            bootstrap: [CommentsComponent_1]
        }),
        core_1.Component({
            moduleId: module.i,
            selector: 'comments',
            template: __webpack_require__("./app/comments/comments.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute])
    ], CommentsComponent);
    return CommentsComponent;
    var CommentsComponent_1;
}());
exports.CommentsComponent = CommentsComponent;


/***/ }),

/***/ "./app/comments/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/comments/comments.component.ts"));


/***/ }),

/***/ "./app/customization/customization.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"loading\" *ngIf=\"loading\">\n    <span>Loading</span>\n    <div class=\"dotsContainer\">\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n    </div>\n</div>\n\n<h3>Customization</h3>\n\n<div>\n\n    <div>\n        <span class=\"customefieldtitle\">Selected Post Limit: </span> <span >{{customization.postLimit}}</span>\n    </div>\n\n\n    <div>\n        <span class=\"customefieldtitle\">Your Favourite Tags: </span> <span *ngFor=\"let f of customization.favortieTags\">\n\n            <span class=\"questions_tags\">{{f}}</span>\n        </span>\n    </div>\n    <div>\n        <span class=\"customefieldtitle\">Created on: </span><span>{{customization.creationDate}}</span>\n    </div>\n\n    <form (ngSubmit)=\"saveCustomeField()\">\n\n        <div class=\"form-group\">\n            <label for=\"usr\">Post Limit:</label>\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"newPostlimit\" [ngModelOptions]=\"{standalone: true}\"\n(click)=\"currentpostLimitToedit(customization.postLimit)\" id=\"usr\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleTextarea\">Tags</label> Seperate each tag by comma ','\n            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" [(ngModel)]=\"newCustomeTags\" [ngModelOptions]=\"{standalone: true}\" (click)=\"currentTagsToedit(customization.favortieTags)\" required></textarea>\n        </div>\n\n\n        <button id=\"submit\" type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n    </form>\n\n\n</div>\n"

/***/ }),

/***/ "./app/customization/customization.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var CustomizationComponent = /** @class */ (function () {
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
    CustomizationComponent_1 = CustomizationComponent;
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
    CustomizationComponent = CustomizationComponent_1 = __decorate([
        core_1.NgModule({
            declarations: [CustomizationComponent_1],
            bootstrap: [CustomizationComponent_1]
        }),
        core_1.Component({
            moduleId: module.i,
            selector: 'customization',
            template: __webpack_require__("./app/customization/customization.component.html"),
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], CustomizationComponent);
    return CustomizationComponent;
    var CustomizationComponent_1;
}());
exports.CustomizationComponent = CustomizationComponent;


/***/ }),

/***/ "./app/customization/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/customization/customization.component.ts"));


/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n\n<div id=\"loading\" *ngIf=\"!customization && QNotloaded\">\n    <span>Loading</span>\n    <div class=\"dotsContainer\">\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n    </div>\n</div>\n\n\n<!-- Favourite Questions-->\n<div id=\"sovauser_icon_field\">\n    <span id=\"sovauser_icon\" class=\"customefieldtitle\">&#x263A; </span> <span id=\"sovauser_name\">{{currentUser.username}}</span>\n</div>\n<h1 id=\"Home_title\">Recommended Questions</h1>\n<div *ngIf=\"customization\">\n\n    <div>\n        <span class=\"customefieldtitle\">Selected Post Limit: </span> <span>{{customization.postLimit}}</span>\n    </div>\n\n\n    <div>\n        <span class=\"customefieldtitle\">Your Favourite Tags: </span> <span *ngFor=\"let f of customization.favortieTags\">\n\n            <span class=\"questions_tags\">{{f}}</span>\n        </span>\n    </div>\n</div>\n<div class=\"questions_container\" *ngIf=\"suggestedQuestions\">\n    <div *ngFor=\"let s of suggestedQuestions\">\n        <div class=\"question_container\" *ngIf=\"s.postId!=0\" (click)=\"goToQuestion(s.postId)\">\n            <div class=\"questions_title\"><span>{{s.title}}</span></div>\n            <div class=\"questions_user\"><span class=\"user_icon\"></span><span class=\"questions_user_name\">{{s.user}}</span></div>\n            <span class=\"tags_icon\"></span><div class=\"questions_tags_container\" *ngFor=\"let f of s.tags\"><span class=\"questions_tags\">{{f}}</span></div>\n            <div class=\"Questions_score_block\">\n                <span class=\"question_score_sign\">&#x270C;</span><div id=\"score\">{{s.score}}</div>\n            </div>\n        </div>\n        <div id=\"no_matching_post\" *ngIf=\"s.postId==0\">\n\n            There's no matching post according to your favourite tags\n        </div>\n    </div>\n</div>\n\n<!--<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p>You're logged in</p>\n    <h3>All registered users:</h3>\n    <ul>\n        <li *ngFor=\"let user of users\">\n            {{user.id}} ({{user.firstName}} {{user.lastName}})\n            - <a (click)=\"deleteUser(user.id)\">Delete</a>\n        </li>\n    </ul>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>-->\n\n<div class=\"spacer\"></div>\n\n\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var index_1 = __webpack_require__("./app/_services/index.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, config, userService, route, router) {
        this.http = http;
        this.config = config;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.suggestedQurl = '/start/';
        this.customizationUrl = '/customization/';
        this.postId = 1;
        this.QNotloaded = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        //new
        this.http.get(this.config.apiUrl + this.suggestedQurl + this.currentUser.id).subscribe(function (result) {
            _this.suggestedQuestions = result.json().recommendedQuestions;
            _this.QNotloaded = false;
        }, function (error) { return console.error(error); });
        this.http.get(this.config.apiUrl + this.customizationUrl + this.currentUser.id).subscribe(function (result) {
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
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            template: __webpack_require__("./app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, index_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/home/home.component.ts"));


/***/ }),

/***/ "./app/jcloud/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/jcloud/jcloud.component.ts"));


/***/ }),

/***/ "./app/jcloud/jcloud.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cloud\" id=\"{{id}}\" style=\"width: 200px; height: 200px; display: inline-block;\"></div>\n"

/***/ }),

/***/ "./app/jcloud/jcloud.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
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
            moduleId: module.i,
            selector: 'jcloud',
            template: __webpack_require__("./app/jcloud/jcloud.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], JcloudComponent);
    return JcloudComponent;
}());
exports.JcloudComponent = JcloudComponent;


/***/ }),

/***/ "./app/login/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/login/login.component.ts"));


/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n    \n</div>\n"

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var index_1 = __webpack_require__("./app/_services/index.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error('Username or password is incorrect');
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            template: __webpack_require__("./app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            index_1.AuthenticationService,
            index_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./app/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "./app/markings/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/markings/markings.component.ts"));


/***/ }),

/***/ "./app/markings/markings.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Markings</h1>\n<div>\n\n    <div id=\"loading\" *ngIf=\"!loaded\">\n        <span>Loading</span>\n        <div class=\"dotsContainer\">\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n        </div>\n    </div>\n\n\n    <div class=\"questions_container\"  >\n        <div *ngFor=\"let m of markings.data\">\n            <div class=\"marking_container\" (click)=\"goToQuestion(m.postId)\">\n                <div class=\"marking_title\"><span>{{m.postTitle}}</span></div>\n            </div>\n        </div>\n\n\n\n    </div>\n    <div *ngIf=\"!isloaded\">\n        <span class=\"page_status\">Results: </span>\n        <span>{{markings.total}}</span>\n        <span class=\"page_status\">Pages: </span>\n        <span>{{markings.pages}}</span>\n        <span class=\"page_status\">Page: </span>\n        <span>{{markings.page + 1}}</span><br><br>\n    </div>\n      <span *ngIf=\"markings.prev\"><button class=\"page_button\" (click)=\"goToPrevPage(markings.prev,markings.page)\"><span style=\"font-size:11px;\">&#9668;</span>&nbsp;  Prev</button></span>\n    <span *ngIf=\" markings.next\"><button class=\"page_button\" (click)=\"goToNextPage(markings.next,markings.page)\">Next  &nbsp;<span style=\"font-size:11px;\"> &#9658;</span></button></span>\n    <div class=\"spacer\"></div>\n</div>\n"

/***/ }),

/***/ "./app/markings/markings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var MarkingsComponent = /** @class */ (function () {
    function MarkingsComponent(http, config, route, router) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.url = "";
        this.loaded = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.url = '/marking/all/' + this.currentUser.id + '?page=' + this.route.snapshot.queryParams["page"] + "&pageSize=12";
        http.get(config.apiUrl + this.url).subscribe(function (result) {
            _this.markings = result.json();
            _this.loaded = true;
        }, function (error) { return console.error(error); });
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var pageNumber = _this.route.snapshot.queryParams["page"];
                console.log(pageNumber);
                http.get(config.apiUrl + '/marking/all/' + _this.currentUser.id + '?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
                    _this.markings = result.json();
                    _this.loaded = true;
                }, function (error) { return console.error(error); });
            }
        });
    }
    MarkingsComponent.prototype.goToNextPage = function (url, pageNum) {
        this.loaded = false;
        this.url = url;
        this.router.navigate(['/markings'], { queryParams: { page: pageNum + 1 } });
    };
    MarkingsComponent.prototype.goToPrevPage = function (url, pageNum) {
        this.loaded = false;
        this.url = url;
        this.router.navigate(['/markings'], { queryParams: { page: pageNum - 1 } });
    };
    MarkingsComponent.prototype.goToQuestion = function (id) {
        this.router.navigate(['/question', id]);
    };
    MarkingsComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'markings',
            template: __webpack_require__("./app/markings/markings.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], MarkingsComponent);
    return MarkingsComponent;
}());
exports.MarkingsComponent = MarkingsComponent;


/***/ }),

/***/ "./app/navmenu/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/navmenu/navmenu.component.ts"));


/***/ }),

/***/ "./app/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse-next\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <span> <h1 id=\"logoh1\"> <span class=\"glitch\" href=\"#\" data-text=\"app\">sova</span></h1></span>\n\n        </div>\n\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class='nav navbar-nav navbar-right'>\n\n                <li *ngIf=\"localStorageItem('currentUser') != null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['']\">\n                        Home\n                    </a>\n                </li>\n                <li *ngIf=\"localStorageItem('currentUser') != null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/search']\" [queryParams]=\"{}\">\n                        Search\n                    </a>\n                </li>\n                <li *ngIf=\"localStorageItem('currentUser') != null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/questions']\" [queryParams]=\"{ page:0, url:questionsUrl }\">\n                       Questions\n                    </a>\n                </li>\n                <li *ngIf=\"localStorageItem('currentUser') != null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/users']\" [queryParams]=\"{ page:0 }\">\n                        Users\n                    </a>\n                </li>\n                <li *ngIf=\"localStorageItem('currentUser') != null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/markings']\" [queryParams]=\"{ page:0 }\">\n                        Markings\n                    </a>\n                </li>\n\n                <li *ngIf=\"localStorageItem('currentUser') != null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/customization']\">\n                        Customization\n                    </a>\n                </li>\n                <li *ngIf=\"localStorageItem('currentUser') != null\"> \n                  \n                    <a style=\"color:#ff3661\" [routerLink]=\"['/login']\">\n                       <span style=\"color:white\">|</span> Sign out\n                    </a>\n                </li>\n              \n                <li *ngIf=\"localStorageItem('currentUser') == null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/login']\" [queryParams]=\"{ page:0 }\">\n                        Login\n                    </a>\n                </li>\n\n                <li *ngIf=\"localStorageItem('currentUser') == null\" [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/register']\">\n                        Register\n                    </a>\n                </li>\n\n            </ul>\n        </div>\n\n    </div><!-- /.container-fluid -->\n\n\n</nav>"

/***/ }),

/***/ "./app/navmenu/navmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(config, router) {
        this.config = config;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.questionsUrl = this.config.apiUrl + "/question";
    }
    NavMenuComponent.prototype.localStorageItem = function (id) {
        return localStorage.getItem(id);
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'nav-menu',
            template: __webpack_require__("./app/navmenu/navmenu.component.html"),
        }),
        __metadata("design:paramtypes", [app_config_1.AppConfig,
            router_1.Router])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;


/***/ }),

/***/ "./app/question/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/question/question.component.ts"));


/***/ }),

/***/ "./app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\" *ngIf=\"!questionReady\">\n    <span>Loading</span>\n    <div class=\"dotsContainer\">\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n    </div>\n</div>\n<br/><br /><br />\n<div id=\"MarkButton\"  *ngIf=\"!isMarked && questionReady\" (click)=\"markThis()\">\n    <span>&#9733;</span>\n\n</div>\n\n<div id=\"UnMarkButton\" *ngIf=\"isMarked && questionReady\"  (click)=\"unMarkThis()\">\n    <span>&#x2718;</span>\n\n</div>\n\n<div class=\"container-fluid\"  *ngIf=\"questionReady\">\n    <!--Annotation Box-->\n\n    <div *ngIf=\"isMarked && questionReady\">\n        <annotations *ngIf=\"myAnnotationUrl\" [parentdata]=\"myAnnotationUrl\"></annotations>\n    </div>\n\n    <!--LinkedPosts Box-->\n\n    <div class=\"linked_posts\" *ngIf=\"question.linkedPosts.length\">\n        <div>\n            <span id=\"linkposts_button\" class=\"accordion-toggle\" data-toggle=\"collapse-next\"><h2>{{question.linkedPosts.length}}</h2> <h2>Linked Posts</h2><span>&#9660;</span></span>\n        </div>  \n        <div id=\"links\" class=\"accordion-body collapse out  \">\n            <div *ngFor=\"let l of question.linkedPosts\">\n                <div data-toggle=\"collapse\" data-target=\"#links\"  (click)=\"goToQuestion(l.id)\"  class=\"linked_posts_title\">Title: <div>{{l.postTitle}}</div> </div>\n\n            </div>\n        </div>\n    </div>\n\n\n\n    <div id=\"questionContainer\">\n\n        <!--Header-->\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div id=\"title\">{{question.title}}</div>\n            </div>\n        </div>\n\n        <!--Creation date-->\n        <div class=\"row\">\n            <div class=\"col-xs-1\"></div>\n            <div class=\"col-xs-12 col-md-11\">\n                <span class=\"time_icon\"></span> <div id=\"question_date\">{{question.creationDate}}</div>\n            </div>\n        </div>\n\n        <!--Score & body-->\n        <div class=\"row\">\n            <!--Score-->\n            <div class=\"col-xs-1\">\n                <span class=\"question_score_sign\">&#x270C;</span><div id=\"score\">{{question.score}}</div>\n            </div>\n            <!--Body-->\n            <div class=\"col-xs-11\">\n                <div id=\"body\" style=\"float: left\" [innerHtml]=\"question.body\"></div>\n            </div>\n\n        </div>\n      \n        <!--Comments-->\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-11 col-sm-offset-1 col-md-11 col-md-offset-1 col-lg-11 col-lg-offset-1\">\n                <comments *ngIf='question.commentsUrl'  [parentdata]=\"question.commentsUrl\"></comments>\n            </div>\n        </div> \n\n        <!--Answers -->\n        <div class=\"row\">\n            <div class=\"col-xs-11 col-xs-offset-1 col-md-10 col-md-offset-2\">\n                <div  id=\"answer\">\n                    <answers *ngIf='question.answersUrl'   [parentdata]=\"question.answersUrl\" ></answers>\n\n                </div>\n            </div>\n        </div>\n\n\n\n\n\n    </div>\n    </div>\n"

/***/ }),

/***/ "./app/question/question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
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
            moduleId: module.i,
            selector: 'question',
            template: __webpack_require__("./app/question/question.component.html"),
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;


/***/ }),

/***/ "./app/questions/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/questions/questions.component.ts"));


/***/ }),

/***/ "./app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <h1 id=\"Home_title\">Questions</h1>\n<div>\n    <div id=\"loading\" *ngIf=\"!isLoaded\">\n        <span>Loading</span>\n        <div class=\"dotsContainer\">\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n        </div>\n    </div>\n\n\n    <div class=\"questions_container\" >\n        <div *ngFor=\"let q of questions.data\">\n            <div (click)=\"goToQuestion(q.postId)\">\n                <div class=\"question_container\">\n                    <div class=\"questions_title\"><span>{{q.title}}</span></div>\n\n                    <div class=\"questions_user\"><span class=\"user_icon\"></span><span class=\"questions_user_name\"> {{q.userName}}</span></div>\n                    <span class=\"tags_icon\"></span><div class=\"questions_tags_container\" *ngFor=\"let t of q.tags\"><span class=\"questions_tags\"> {{t}}</span></div>\n                    <div class=\"Questions_score_block\">\n                        <span class=\"question_score_sign\">&#x270C;</span><div id=\"score\">{{q.score}}</div>\n                    </div>\n\n                </div>\n                <!--<a [routerLink]=\"['/question', q.postId]\">\n\n                </a>-->\n            </div>\n        </div>\n\n    </div>\n\n\n    <span class=\"page_status\">Results: </span>\n    <span total>{{questions.total}}</span>\n    <span class=\"page_status\">Pages: </span>\n    <span>{{questions.pages}}</span>\n    <span class=\"page_status\">Page: </span>\n    <span>{{questions.page + 1}}</span><br><br>\n    <span *ngIf=\"questions.prev\"><button class=\"page_button\" (click)=\"goToPrevPage(questions.prev,questions.page)\"><span style=\"font-size:11px;\">&#9668;</span>&nbsp;  Prev</button></span>\n    <span *ngIf=\"questions.next\"><button class=\"page_button\" (click)=\"goToNextPage(questions.next,questions.page)\">Next &nbsp;<span style=\"font-size:11px;\"> &#9658;</span></button></span>\n    <div class=\"spacer\"></div>\n\n    <div class=\"spacer\"></div>\n\n</div>\n"

/***/ }),

/***/ "./app/questions/questions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(http, config, route, router) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.route = route;
        this.router = router;
        this.url = '/question?page=' + this.route.snapshot.queryParams["page"] + "&pageSize=12";
        this.Url = this.route.snapshot.queryParams["url"];
        this.isLoaded = false;
        this.body = "";
        router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var pageNumber = _this.route.snapshot.queryParams["page"];
                console.log(pageNumber);
                http.get(config.apiUrl + '/question?page=' + pageNumber + "&pageSize=12").subscribe(function (result) {
                    _this.questions = result.json();
                    _this.isLoaded = true;
                }, function (error) { return console.error(error); });
            }
        });
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.Url).subscribe(function (result) {
            _this.questions = result.json();
            _this.isLoaded = true;
        }, function (error) { return console.error(error); });
    };
    QuestionsComponent.prototype.goToNextPage = function (url, pageNum) {
        this.isLoaded = false;
        this.url = url;
        this.router.navigate(['/questions'], { queryParams: { page: pageNum + 1 } });
    };
    QuestionsComponent.prototype.goToPrevPage = function (url, pageNum) {
        this.isLoaded = false;
        this.url = url;
        this.router.navigate(['/questions'], { queryParams: { page: pageNum - 1 } });
    };
    QuestionsComponent.prototype.goToQuestion = function (id) {
        this.router.navigate(['/question', id]);
    };
    QuestionsComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            selector: 'questions',
            template: __webpack_require__("./app/questions/questions.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], QuestionsComponent);
    return QuestionsComponent;
}());
exports.QuestionsComponent = QuestionsComponent;


/***/ }),

/***/ "./app/register/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/register/register.component.ts"));


/***/ }),

/***/ "./app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n            <label for=\"lastName\">Your favourite subjects ( tags sepereted by cumma ' , ' )</label>\n            <input type=\"text\" class=\"form-control\" name=\"tags\" [(ngModel)]=\"model.tags\" #tags=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !tags.valid\" class=\"help-block\">Your favourite subjects are required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var index_1 = __webpack_require__("./app/_services/index.ts");
var app_config_1 = __webpack_require__("./app/app.config.ts");
var RegisterComponent = /** @class */ (function () {
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
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.i,
            template: __webpack_require__("./app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.Http,
            app_config_1.AppConfig,
            index_1.UserService,
            index_1.AlertService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./app/search/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/search/search.component.ts"));


/***/ }),

/***/ "./app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<body>\n\n\n    <div id=\"loading\" *ngIf=\"isSearching\">\n        <span>Loading</span>\n        <div class=\"dotsContainer\">\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n            <div class=\"dot\"></div>\n        </div>\n    </div>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th id=\"thsearchbar\" class=\"my_searchbar_th\">\n\n                    <input id=\"mySearchBar\" type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" name=\"FirstName\" value=\"Mickey\">\n\n                </th>\n                <th class=\"my_searchbar_th\">\n                    <button id=\"submit\"  (click)=\"startSearching()\" type=\"submit\" class=\"btn btn-primary\">GO!</button>\n                </th>\n            </tr>\n        </thead>\n    </table>\n\n    <div class=\"linked_posts\" id=\"mySearchhistory\">\n        <div>\n            <span id=\"linkposts_button\"  data-target=\"#links\"> <h2>Top searches by users </h2><span>&#9660;</span></span>\n        </div>\n            <div id=\"links\" class=\"collapse\">\n            <div  *ngFor=\"let sh of searchHistory.data\">\n\n                <div data-toggle=\"collapse-next\" data-target=\"#links\" (click)=\"searchItAgain(sh.searchText) \" class=\"linked_posts_title\"><div>{{sh.searchText}}</div> </div>\n\n            </div>\n        </div>\n    </div>\n    <br />\n    <!--Search Data-->\n    <div *ngIf=\"searches.data\">\n        <div id=\"mySearchData\">\n            <div *ngFor=\"let s of searches.data\">\n                <div class=\"searchTR\" (click)=\"goToQuestion(s.postId)\">\n\n                    <!--WordCloud -->\n                    <jcloud [parentdata]=\"s.postId\"></jcloud>\n                    <div class=\"searchedTitel\">{{s.postTitle}}</div>\n                    <span class=\"tags_icon\"></span><div class=\"questions_tags_container\" *ngFor=\"let t of s.tags\"><span class=\"questions_tags\">{{t}}</span></div>\n                </div>\n            </div>\n        </div>\n\n\n        <span class=\"page_status\">Results: </span>\n        <span>{{searches.total}}</span>\n        <span class=\"page_status\">Pages: </span>\n        <span>{{searches.pages}}</span>\n        <span class=\"page_status\">Page: </span>\n        <span>{{searches.page + 1}}</span><br><br>\n        <span *ngIf=\"searches.prev\"><button class=\"page_button\" (click)=\"goToPrev(searches.prev,searches.page)\"><span style=\"font-size:11px;\">&#9668;</span>&nbsp;  Prev</button></span>\n        <span *ngIf=\"searches.next\"><button class=\"page_button\" (click)=\"goToNext(searches.next,searches.page )\">Next  &nbsp;<span style=\"font-size:11px;\"> &#9658;</span></button></span>\n    </div>\n    <div class=\"spacer\"></div>\n</body>"

/***/ }),

/***/ "./app/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var jcloud_component_1 = __webpack_require__("./app/jcloud/jcloud.component.ts");
var app_config_1 = __webpack_require__("./app/app.config.ts");
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
            moduleId: module.i,
            selector: 'search',
            template: __webpack_require__("./app/search/search.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
    var SearchComponent_1;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./app/users/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/users/users.component.ts"));


/***/ }),

/***/ "./app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Users</h1>\n<div id=\"loading\" *ngIf=\"!users.data\">\n    <span>Loading</span>\n    <div class=\"dotsContainer\">\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n        <div class=\"dot\"></div>\n    </div>\n</div>\n<div  *ngIf=\"users.data\">\n\n\n    <section>\n\n        <div class=\"questions_container\" >\n            <div *ngFor=\"let u of users.data\">\n            <div class=\"user_container\" >\n                <div class=\"users_displayname\">\n                    <span class=\"user_icon user_icon_users\"></span>\n                    <span class=\"users_displayname users_displayname_users\">{{u.displayName}}</span>\n                    <span class=\"location_container\"><span class=\"location_icon\"></span><span>{{u.location}}</span></span>\n                    <span class=\"users_displayname users_displayname_users users_see_questions\" *ngIf=\"u.questionsUrl!=null\"  [routerLink]=\"['/questions']\" [queryParams]=\"{ page:0, url:u.questionsUrl }\">See questions</span>\n\n                </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"spacer\"></div>\n\n\n    </section>\n\n\n    <span class=\"page_status\">Results: </span>\n    <span>{{users.total}}</span>\n    <span class=\"page_status\">Pages: </span>\n    <span>{{users.pages}}</span>\n    <span class=\"page_status\">Page: </span>\n    <span>{{users.page + 1}}</span><br><br>\n    <span *ngIf=\"users.prev\" ><button class=\"page_button\" (click)=\"goToPrevPage(users.prev,users.page)\"><span style=\"font-size:11px;\">&#9668;</span>&nbsp;  Prev</button></span>\n    <span  *ngIf=\"users.next\"><button class=\"page_button\" (click)=\"goToNextPage(users.next,users.page)\">Next  &nbsp;<span style=\"font-size:11px;\"> &#9658;</span></button></span>\n    <br /><br />\n</div>\n"

/***/ }),

/***/ "./app/users/users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_config_1 = __webpack_require__("./app/app.config.ts");
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
            moduleId: module.i,
            selector: 'users',
            template: __webpack_require__("./app/users/users.component.html")
        }),
        __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig, router_1.ActivatedRoute, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map