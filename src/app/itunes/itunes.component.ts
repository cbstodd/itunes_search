import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/operator/debounce.js';
import 'rxjs/add/operator/distinct.js';
import 'rxjs/add/operator/switchMap.js';
import 'rxjs/add/operator/do.js';

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
        this.results     = this.searchField.valueChanges
                               .debounceTime(400)
                               .distinctUntilChanged()
                               .do(_ => this.loading = true)
                               .switchMap(term => this.ituneSS.search(term))
                               .do(_ => this.loading = false)
    }


    doSearch(term:string) {
        this.loading = true;
        this.results = this.ituneSS.search(term);

    }


}
