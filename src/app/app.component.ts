import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'i-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    apiRoot:string = 'https://itunes.apple.com/search';
    results:Object[];
    loading:boolean;

    constructor(private http:Http) {
        this.results = [];
        this.loading = false;
    }

    search(term:string) {

    }


}
