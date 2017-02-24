import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'i-itunes',
  templateUrl: './itunes.component.html',
  styleUrls: ['./itunes.component.css']
})
export class ItunesComponent {

    private loading:boolean = false;

    constructor(private ituneSS:SearchService){}

    doSearch(term:string){
        this.loading = true;
        // When .then promise is resolved then switch to false.
        this.ituneSS.search(term).then( () => this.loading = false);
    }


}
