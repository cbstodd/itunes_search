import { HomeComponent } from './home/home.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AlwaysAuthGuardService } from './always-auth-guard.service';
import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';
import { AlwaysAuthChildrenGuardService } from './always-auth-children-guard.service';
import { ArtistMusicVideoListComponent } from './artist-music-video-list/artist-music-video-list.component';

const routes:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    {
        path: 'artist/:artistId',  // :artistId comes from the search-item.ts model
        component: ArtistComponent,
        canActivate: [AlwaysAuthGuardService, OnlyLoggedInUsersGuardService],
        canActivateChild: [AlwaysAuthChildrenGuardService],
        children: [
            { path: '', redirectTo: 'tracks' },
            { path: 'tracks', component: ArtistTrackListComponent },
            { path: 'albums', component: ArtistAlbumListComponent },
            { path: 'videos', component: ArtistMusicVideoListComponent }
        ]
    },
    { path: 'find', redirectTo: 'search' },
    { path: 'home/search', redirectTo: 'search' },
    { path: '**', component: HomeComponent }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);