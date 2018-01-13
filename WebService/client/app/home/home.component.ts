import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../app.config';



@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    //new
    public suggestedQuestions: GetsuggestedQuestions;
    public customization: GetCustomization;

    suggestedQurl = '/start';
    customizationUrl = '/customization/';
    markingStatus: string;
    postId: number = 1;
    QNotloaded: boolean = true;



    constructor(private http: Http, private config: AppConfig,  private userService: UserService, private route: ActivatedRoute, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();

        //new
        this.http.get(this.config.apiUrl + this.suggestedQurl).subscribe(result => {
            this.suggestedQuestions = result.json().recommendedQuestions as GetsuggestedQuestions;
            this.QNotloaded = false;
        }, error => console.error(error));

        this.http.get(this.config.apiUrl + this.customizationUrl + this.currentUser.id).subscribe(result => {
            this.customization = result.json() as GetCustomization;
        }, error => console.error(error));
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    //new
    public goToQuestion(id: number) {
        this.router.navigate(['/question', id]);
    }

}
interface GetsuggestedQuestions {
}
interface GetCustomization {
}