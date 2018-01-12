import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../app.config';

@Component({
    moduleId: module.id,
    selector: 'markings',
    templateUrl: './markings.component.html'
})
export class MarkingsComponent {
    public markings: GetMarkings;

    url = '/marking?page=' + this.route.snapshot.queryParams["page"] + "&pageSize=12";





    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {
        http.get(config.apiUrl + this.url).subscribe(result => {
            this.markings = result.json() as GetMarkings;
        }, error => console.error(error));

        router.events
            .subscribe((event) => {
                
                if (event instanceof NavigationEnd) {
                     var pageNumber = this.route.snapshot.queryParams["page"];
                     console.log(pageNumber);
                     http.get(config.apiUrl + '/marking?page=' + pageNumber + "&pageSize=12"
                     ).subscribe(result => {
                         this.markings = result.json() as GetMarkings;
                     }, error => console.error(error));
                }

            });

    }



    public goToNextPage(url: string,pageNum:number) {
        this.url = url;
        this.router.navigate(['/markings'], { queryParams: { page: pageNum + 1} });
    }

    public goToPrevPage(url: string, pageNum: number) {
        this.url = url;
        this.router.navigate(['/markings'], { queryParams: { page: pageNum - 1 } });
    }
    
    public goToQuestion(id:number) {
        this.router.navigate(['/question', id]);     
    }


}


interface GetMarkings {
    page: number;
}

