import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AlertService, UserService } from '../_services/index';
import { AppConfig } from '../app.config';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    customeFieldUrl = '/customization/';
    constructor(
        private router: Router,
        private http: Http,
        private config: AppConfig,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
            data => {

       

                //adding customefield
                var NewCustomeUrl = this.config.apiUrl + "/customization/";
                var body = JSON.stringify({
                    UserName: this.model.username,
                    FavortieTags: this.model.tags.split(","),
                    PostLimit: 12
                });
                let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
                let options = new RequestOptions({ headers: headers, body: body }); // Create a request option
                this.loading = true;

                this.http
                    .post(NewCustomeUrl, body, options
                    )
                    .subscribe(data => {


                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);


                    }, error => {
                        console.log(JSON.stringify(error.json()));
                    });

              
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
            });
    }



}
