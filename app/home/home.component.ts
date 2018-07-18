import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {AuthService} from "~/services/auth.service";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit{

    constructor(private router : Router) {}

    ngOnInit() : void{

    }
    logout() : void{
        firebase.logout();
        AuthService.token = null;
        this.router.navigate(['/login']);
    }
}