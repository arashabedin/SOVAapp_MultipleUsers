import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { QuestionsComponent } from './questions/index';
import { SearchComponent } from './search/index';
import { QuestionComponent } from './question/index';
import { UsersComponent } from './users/index';
import { MarkingsComponent } from './markings/index';
import { CustomizationComponent } from './customization/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'questions', component: QuestionsComponent, canActivate: [AuthGuard]},
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'question/:id', component: QuestionComponent, canActivate: [AuthGuard]},
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'markings', component: MarkingsComponent, canActivate: [AuthGuard]},
    { path: 'customization', component: CustomizationComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);