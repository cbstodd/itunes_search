import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchService } from './search/search.service';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { AlwaysAuthGuardService } from './always-auth-guard.service';
import { routing } from './app.routes';
import { UserService } from './user.service';
import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';
import { AlwaysAuthChildrenGuardService } from './always-auth-children-guard.service';
import 'rxjs/Rx';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
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
    providers: [
        SearchService,
        AlwaysAuthGuardService,
        UserService,
        OnlyLoggedInUsersGuardService,
        AlwaysAuthChildrenGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
