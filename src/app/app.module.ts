import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchService } from './itunes/search.service';
import { ItunesComponent } from './itunes/itunes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// ROUTES
const routes:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: ItunesComponent },
    { path: 'find', redirectTo: 'search' },
    { path: 'home/search', redirectTo: 'search' },
    { path: '**', component: HomeComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        ItunesComponent,
        NavbarComponent,
        HomeComponent
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
