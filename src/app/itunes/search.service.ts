import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

    apiRoot:string = 'https://itunes.apple.com/search';
    results:SearchItem[];
    loading:boolean;

    constructor(private http:Http) {
        this.results = [];
        this.loading = false;
    }

    search(term:string):Observable<SearchItem[]> {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        return this.http.get(apiURL)
                   .map(resp => {
                       let results = resp.json().results.map(item => {
                           return new SearchItem(
                               item.artistName,
                               item.trackName,
                               item.trackViewUrl,
                               item.artworkUrl60,
                               item.artistId
                           );
                       });
                       return results;
                   });

    }


}
