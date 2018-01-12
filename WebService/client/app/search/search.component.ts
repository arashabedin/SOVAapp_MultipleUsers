import { Component, Inject,Input,OnInit ,NgModule} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JcloudComponent } from '../jcloud/jcloud.component';
import { AppConfig } from '../app.config';

declare var jquery: any;
declare var $: any;

@NgModule({
    declarations: [SearchComponent, JcloudComponent],
    bootstrap: [SearchComponent]
})

    @Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    public searches: GetSearches;
    public searchHistory : GetSearchHistory;
    Url = this.route.snapshot.queryParams["url"];
    newPageUrl: string;
    searchText: string ='';
    isSearching: boolean = false;
    isSearched: boolean = false;
    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {


        //$('.linked_posts_title').on('click.collapse-next.data-api', '[data-toggle=collapse-next]', function () {
        //    var $target = $(this).parent().next()
        //    $target.data('collapse') ? $target.collapse('toggle') : $target.collapse('toggle')
        //});
        this.searches = {};
        this.isSearching = true;
        var pageNumber = this.route.snapshot.queryParams["page"];
        if (pageNumber == null) {
            this.isSearching = false;
        }
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12"
        ).subscribe(result => {
            this.isSearching = false;
            this.searches = result.json() as GetSearches;

        }, error => console.error(error));
    

        router.events
            .subscribe((event) => {
              
                    if (event instanceof NavigationEnd) {
                  
                    }
                
                

            });

    }

    ngOnInit() {
        this.http.get(this.config.apiUrl  + '/searchhistory'
        ).subscribe(result => {
            this.searchHistory = result.json() as GetSearchHistory;

            setTimeout(function () {
                $('.linked_posts_title,#linkposts_button').click(function () {
                    $("#links").slideToggle();

                });

            }, 500);
       

        

        }, error => console.error(error));
    }
    
    startSearching() {
        this.isSearched = true;
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: { searchText: this.searchText, page: 0 } });
        this.searches = {};
        var pageNumber = this.route.snapshot.queryParams["page"];

        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12"
        ).subscribe(result => {
            this.isSearching = false;
            this.searches = result.json() as GetSearches;

        }, error => console.error(error));

    }
   searchItAgain(text: string) {
            this.isSearched = true;
            this.isSearching = true;
            this.searchText = text;
            this.router.navigate(['/search'], { queryParams: { searchText: text, page: 0 } });
            this.searches = {};
            var pageNumber = this.route.snapshot.queryParams["page"];
          
            var text = this.searchText;
            this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12"
            ).subscribe(result => {
                this.isSearching = false;
                this.searches = result.json() as GetSearches;

            }, error => console.error(error));

    }
    goToPrev(url: string, pageNum: number) {
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: { searchText: this.searchText, page: pageNum - 1 } });
        this.newPageUrl = url;
        this.searches = {};
        this.isSearching = true;
        var pageNumber = this.route.snapshot.queryParams["page"];
        if (pageNumber == null) {
            this.isSearching = false;
        }
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12"
        ).subscribe(result => {
            this.isSearching = false;
            this.searches = result.json() as GetSearches;

        }, error => console.error(error));
}
    goToNext(url: string, pageNum: number) {
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: { searchText: this.searchText, page: pageNum + 1 } });
        this.newPageUrl = url;

        this.searches = {};
        this.isSearching = true;
        var pageNumber = this.route.snapshot.queryParams["page"];
        if (pageNumber == null) {
            this.isSearching = false;
        }
        var text = this.searchText;
        this.http.get(this.config.apiUrl + '/search/' + text + '?page=' + pageNumber + "&pageSize=12"
        ).subscribe(result => {
            this.isSearching = false;
            this.searches = result.json() as GetSearches;

        }, error => console.error(error));
    }


    public goToQuestion(id: number) {
        this.router.navigate(['/question', id]);
    }

    body: string = "";

}

interface GetSearches {
}

interface GetSearchHistory {
}
