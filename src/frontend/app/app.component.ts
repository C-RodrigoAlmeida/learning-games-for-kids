import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterOutlet
    ]
})
export class AppComponent implements OnInit {
    title = 'front_learning-game-for-kids';

    constructor(
        public router?: Router
    ) { }

    ngOnInit(): void {
        // this.router?.navigateByUrl('/home', { skipLocationChange: false })
        console.log('appComponent')
    }
}