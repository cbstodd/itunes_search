import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'i-artist-track-list',
    templateUrl: './artist-track-list.component.html',
    styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {

    constructor(private route:ActivatedRoute) {
        this.route.parent.params.subscribe(params => console.log(params));
    }

    ngOnInit() {
    }

}
