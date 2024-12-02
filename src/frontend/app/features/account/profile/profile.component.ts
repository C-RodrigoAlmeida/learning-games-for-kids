import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private router: Router
    ) {
        this.GetUserInfo()
    }

    GetUserInfo(){
        this.userService.getCurrentUser().subscribe(
            (res) => {
                console.log(res)
              },
              (err) => {
                console.log(err)
              }
        )
    }

    navigateTo(url:string): void {
        this.router.navigate([`/${url}`]);
    }
}