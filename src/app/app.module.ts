import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchService } from './itunes/search.service';
import { ItunesComponent } from './itunes/itunes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes } from '@angular/router';

const routes:Routes = [
    
]


@NgModule({
  declarations: [
    AppComponent,
    ItunesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
