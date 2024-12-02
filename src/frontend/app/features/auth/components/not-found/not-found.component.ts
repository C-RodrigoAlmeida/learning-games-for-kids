import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    navigateToRegister(): void {
        this.router.navigate(['/register']);
    }
} 