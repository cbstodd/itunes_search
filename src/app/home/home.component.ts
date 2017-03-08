import { Component } from '@angular/core';

@Component({
    selector: 'i-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title:string = "iTunes Search";
    punchline:string = "Application to search iTunes artists and tracks";

}
