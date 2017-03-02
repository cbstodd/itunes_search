import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'i-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private router:Router) {
    }

    goHome() {
        this.router.navigate(['']);
    }

    goSearch() {
        this.router.navigate(['search']);
    }

    ngOnInit() {
    }

}
