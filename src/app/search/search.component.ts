import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'i-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    private loading:boolean = false;

    constructor(
        private ituneSS:SearchService,
        private route:ActivatedRoute,
        private router:Router  // Routing
    ) {
        // Prevents returned string from returning 'undefined'
        this.route.params.subscribe(params => {
            if (params['term']) {
                this.doSearch((params['term']))
            }
        });
    }

    onSearch(term:string) {
        this.router.navigate(['search', { term: term }]);


    }

    doSearch(term:string) {
        this.loading = true;
        // When .then promise is resolved then switch to false.
        this.ituneSS.search(term).then(_ => this.loading = false)
    }
    

}
