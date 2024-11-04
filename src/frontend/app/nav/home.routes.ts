import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "../accounts/login/login.component";

const HomeRouterConfig: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(HomeRouterConfig)
    ],
    exports: [RouterModule]
})
export class HomeRouting { }
