import { Component, Inject,Input,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../app.config';

@Component({
    moduleId: module.id,
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {
    public questions: GetQuestions;

    url = '/question?page=' + this.route.snapshot.queryParams["page"] + "&pageSize=12";
    Url = this.route.snapshot.queryParams["url"];
    markingStatus: string;
    isLoaded: boolean = false;


    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {
        

        router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    var pageNumber = this.route.snapshot.queryParams["page"];
                    console.log(pageNumber);
                    http.get(config.apiUrl + '/question?page=' + pageNumber + "&pageSize=12"
                    ).subscribe(result => {
                        this.questions = result.json() as GetQuestions;
                        this.isLoaded = true;
                        }, error => console.error(error));
                }

            });

    }

    ngOnInit() {

        this.http.get(this.Url).subscribe(result => {
            this.questions = result.json() as GetQuestions;
            this.isLoaded = true;
        }, error => console.error(error));
    }

    public goToNextPage(url: string, pageNum: number) {
        this.isLoaded = false;
        this.url = url;
        this.router.navigate(['/questions'], { queryParams: { page: pageNum + 1 } });
    }

    public goToPrevPage(url: string, pageNum: number) {
        this.isLoaded = false;
        this.url = url;
        this.router.navigate(['/questions'], { queryParams: { page: pageNum - 1 } });
    }

    public goToQuestion(id: number) {
        this.router.navigate(['/question', id]);
    }

    body: string = "";

}

interface GetQuestions {
    page: number;
}

