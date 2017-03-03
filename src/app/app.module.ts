import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchService } from './itunes/search.service';
import { ItunesComponent } from './itunes/itunes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { AuthGuardService } from './auth-guard.service';
import { routing } from './app.routes';
import { UserService } from './user.service';
import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';

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
        routing,
    ],
    providers: [SearchService, AuthGuardService, UserService, OnlyLoggedInUsersGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
