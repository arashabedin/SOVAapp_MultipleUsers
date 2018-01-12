import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { NavMenuComponent } from './navmenu/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { QuestionsComponent } from './questions/index';
import { JcloudComponent } from './jcloud/index';
import { SearchComponent } from './search/index';
import { QuestionComponent } from './question/index';
import { CommentsComponent } from './comments/index';
import { AnswersComponent } from './answers/index';
import { AnnotationsComponent } from './annotations/index';
import { UsersComponent } from './users/index';
import { MarkingsComponent } from './markings/index';
import { CustomizationComponent } from './customization/index';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        NavMenuComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        QuestionsComponent,
        QuestionComponent,
        JcloudComponent,
        SearchComponent,
        CommentsComponent,
        AnswersComponent,
        AnnotationsComponent,
        UsersComponent,
        MarkingsComponent,
        CustomizationComponent
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }