import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

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
        private primengConfig: PrimeNGConfig,
        public router?: Router
    ) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        console.log('appComponent')
    }
}