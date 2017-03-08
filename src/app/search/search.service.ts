import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SearchItem } from './search-item';

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
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
            return this.jsonp.request(apiURL)
                       .toPromise()
                       .then(
                           resp => {
                               console.log(resp.json());
                               this.results = resp.json().results.map(item => {
                                   return new SearchItem(
                                       item.artistName,
                                       item.trackName,
                                       item.collectionViewUrl,
                                       item.artworkUrl60,
                                       item.artistId
                                   )
                               });
                               resolve();
                           },
                           msg => {
                               reject();
                           }
                       )

        });
        return promise;

    }


}
