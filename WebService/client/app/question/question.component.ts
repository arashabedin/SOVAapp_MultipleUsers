import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Routes, ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { AnswersComponent } from '../answers/answers.component';
import { AnnotationsComponent } from '../annotations/annotations.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';


@Component({
    moduleId: module.id,
    selector: 'question',
    templateUrl: './question.component.html',

})

export class QuestionComponent implements OnInit{
    questionReady: boolean = false;
    isMarked: boolean = false;
    myAnnotationUrl: string;
    currentUser: User;

    public question: GetQuestion[];
   // public sampleData: any;

    url = "";
    newId:number = 0;
    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.url = '/question/' + this.currentUser.id+ '/' + this.route.snapshot.paramMap.get('id');
        this.myAnnotationUrl = config.apiUrl + '/marking/' + this.currentUser.id + '/'+ this.route.snapshot.paramMap.get('id');
        router.events
            .subscribe((event) => {

                if (event instanceof NavigationEnd) {
                    this.questionReady = false;

                    http.get(config.apiUrl + this.url
                    ).subscribe(result => {

                        this.question = result.json() as GetQuestion[];
                        this.questionReady = true;
                        this.isMarked = result.json().unMarkPost != "Not marked yet";

                        }, error => console.error(error));
                }

            });

    }

ngOnInit() {

    }



    public goToQuestion(id: number) {
        //this.router.navigate(['']);
        this.router.navigate(['/question', id]);
        this.url = '/question/' + this.currentUser.id + '/' + id;

}


    public markThis() {
        var AddMarkingUrl = "/marking/" + this.currentUser.id + '/' + this.route.snapshot.paramMap.get('id');
        var body = "";
        this.http
            .post(this.config.apiUrl + AddMarkingUrl,
            body)
            .subscribe(data => {

                this.isMarked = true;

            }, error => {
                console.log(JSON.stringify(error.json()));
            });


    }

    public unMarkThis() {
        var deleteMarkingUrl = "/marking/" + this.currentUser.id + '/' + this.route.snapshot.paramMap.get('id');
        var body = "";
        this.http
            .delete(this.config.apiUrl + deleteMarkingUrl,
            body)
            .subscribe(data => {
                this.isMarked = false;

            }, error => {
                console.log(JSON.stringify(error.json()));
            });


    }


}

 
interface GetQuestion {
    commentsUrl: string
}
