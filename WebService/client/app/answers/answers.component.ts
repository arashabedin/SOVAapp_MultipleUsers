import { NgModule, Input, Inject, Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { Routes } from '@angular/router';
import { CommentsComponent } from '../comments/comments.component';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppConfig } from '../app.config';



@Component({
    moduleId: module.id,
    selector: 'answers',
    templateUrl: './answers.component.html'
})
export class AnswersComponent implements OnInit {
    @Input('parentdata') parentdata:string ;

    public answers: GetAnswers[];
    _greetMessage: string; 


    mylink: string;

    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute) {
    }



     

    ngOnInit() {
        this.getAnswersData().subscribe(result => {
            this.answers = result.json() as GetAnswers[];
        }, error => console.error(error));
    }
    getAnswersData() {

        return this.http.get(this.parentdata);
    }



}

interface GetAnswers {
}

