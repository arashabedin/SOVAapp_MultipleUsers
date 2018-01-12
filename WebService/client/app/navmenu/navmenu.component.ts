import { Component, Inject } from '@angular/core';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';
import { AuthGuard } from '../_guards/index';
import { Routes, ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
})
    
export class NavMenuComponent {
    currentUser: User;
    questionsUrl: string;
    constructor(private config: AppConfig,
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.questionsUrl = this.config.apiUrl + "/question";           
    }
    public localStorageItem(id: string): string {
        return localStorage.getItem(id);
    }
}
