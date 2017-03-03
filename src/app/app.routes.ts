import { HomeComponent } from './home/home.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistComponent } from './artist/artist.component';
import { ItunesComponent } from './itunes/itunes.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';

const routes:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: ItunesComponent },
    {
        path: 'artist/:artistId',  // :artistId comes from the search-item.ts model
        component: ArtistComponent,
        canActivate: [AuthGuardService, OnlyLoggedInUsersGuardService],
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

export const routing:ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });