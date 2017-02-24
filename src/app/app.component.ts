import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'i-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private ituneSS:SearchService){}

    doSearch(term:string){
        this.ituneSS.search(term);
    }



}
