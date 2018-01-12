import { Component, Inject, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppConfig } from '../app.config';

declare var jquery: any;
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'jcloud',
    templateUrl: './jcloud.component.html'
})
export class JcloudComponent implements OnInit {
    public jclould: GetJCloud;


    @Input("parentdata") id: string;
    constructor(private http: Http, private config: AppConfig, private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
        var CssId = "#" + this.id;
        var Url = this.config.apiUrl + '/TermAsResult/' + this.id;
        this.http.get(Url).subscribe(result => {
            this.jclould = result.json() as GetJCloud;
            $(CssId).jQCloud(this.jclould);
        }, error => console.error(error));

    }
}


interface GetJCloud {
}

