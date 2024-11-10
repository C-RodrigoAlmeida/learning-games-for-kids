import { Component, OnInit } from "@angular/core";
import { HomeRouting } from "../home.routes";

@Component({
    standalone: true,
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    ngOnInit() {
        console.log("Home");
    }
}
