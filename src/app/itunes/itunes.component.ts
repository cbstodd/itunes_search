import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/switchMap.js';

@Component({
    selector: 'i-itunes',
    templateUrl: './itunes.component.html',
    styleUrls: ['./itunes.component.css']
})
export class ItunesComponent implements OnInit {

    private loading:boolean = false;
    private results:Observable<SearchItem[]>;
    private searchField:FormControl;

    constructor(private ituneSS:SearchService) {
    }

    ngOnInit() {
        this.searchField = new FormControl();
        this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.ituneSS.search(term))
            .subscribe(other => console.log(other));
    }


    doSearch(term:string) {
        this.loading = true;
        this.results = this.ituneSS.search(term);

    }


}
