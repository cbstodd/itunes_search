import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchService } from './itunes/search.service';
import { ItunesComponent } from './itunes/itunes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';

// ROUTES
const routes:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: ItunesComponent },
    {
        path: 'artist/:artistId',  // :artistId comes from the search-item.ts model
        component: ArtistComponent,
        children: [
            { path: '', redirectTo: 'tracks' },
            { path: 'tracks', component: ArtistTrackListComponent },
            { path: 'albums', component: ArtistAlbumListComponent }
        ]
    },
    { path: 'find', redirectTo: 'search' },
    { path: 'home/search', redirectTo: 'search' },
    { path: '**', component: HomeComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        ItunesComponent,
        NavbarComponent,
        HomeComponent,
        ArtistComponent,
        ArtistTrackListComponent,
        ArtistAlbumListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        RouterModule.forRoot(routes, { useHash: true }) // enables hash #/ routing
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
