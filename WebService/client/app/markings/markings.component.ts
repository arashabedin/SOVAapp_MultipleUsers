import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';

@Component({
    moduleId: module.id,
    selector: 'markings',
    templateUrl: './markings.component.html'
})
export class MarkingsComponent {
    public markings: GetMarkings;

    url = "";
    currentUser: User;





    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.url = '/marking/all/' + + this.currentUser.id +  +'?page=' + this.route.snapshot.queryParams["page"] + "&pageSize=12";
        http.get(config.apiUrl + this.url).subscribe(result => {
            this.markings = result.json() as GetMarkings;
        }, error => console.error(error));

        router.events
            .subscribe((event) => {
                
                if (event instanceof NavigationEnd) {
                     var pageNumber = this.route.snapshot.queryParams["page"];
                     console.log(pageNumber);
                     http.get(config.apiUrl + '/marking/all/' + this.currentUser.id + '?page=' + pageNumber + "&pageSize=12"
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

