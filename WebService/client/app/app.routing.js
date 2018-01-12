"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./_guards/index");
var index_2 = require("./home/index");
var index_3 = require("./login/index");
var index_4 = require("./register/index");
var index_5 = require("./questions/index");
var index_6 = require("./search/index");
var index_7 = require("./question/index");
var index_8 = require("./users/index");
var index_9 = require("./markings/index");
var index_10 = require("./customization/index");
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
//# sourceMappingURL=app.routing.js.map