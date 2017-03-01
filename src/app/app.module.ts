import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchService } from './itunes/search.service';
import { ItunesComponent } from './itunes/itunes.component';
import 'rxjs/Rx.js';

@NgModule({
    declarations: [
        AppComponent,
        ItunesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        ReactiveFormsModule,

    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
