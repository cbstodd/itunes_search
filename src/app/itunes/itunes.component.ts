import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'i-itunes',
    templateUrl: './itunes.component.html',
    styleUrls: ['./itunes.component.css']
})
export class ItunesComponent {

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

    doSearch(
        term:string
    ) {
        this.loading = true;
        // When .then promise is resolved then switch to false.
        this.ituneSS.search(term).then(() => this.loading = false);
    }


}
