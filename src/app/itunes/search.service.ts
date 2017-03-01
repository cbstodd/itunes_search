import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { SearchItem } from './search-item';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

    apiRoot:string = 'https://itunes.apple.com/search';
    results:SearchItem[];
    loading:boolean;

    constructor(private jsonp:Jsonp) {
        this.results = [];
        this.loading = false;
    }

    search(term:string) {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
        return this.jsonp.request(apiURL)
                   .map(res => {
                       return res.json().results.map(item => {
                           return new SearchItem(
                               item.artistName,
                               item.trackName,
                               item.trackViewUrl,
                               item.artworkUrl60,
                               item.artistId
                           );
                       });
                   });


    }


}
