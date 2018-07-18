import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import firebase =  require("nativescript-plugin-firebase");
import { FloatLabel } from "../float-label/float-label.component";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string;
    password: string;
    processing = false;
    error : string;

    constructor(private page: Page, private router : RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    login(){
        this.processing = true;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: this.email,
            password: this.password,
        }).then( result => {
            this.router.navigate([""], {
                clearHistory: true,
            });
        }).catch( err => {
            console.log(err);
            this.error = JSON.stringify(err);
            this.processing = false;
        });
    }
    goToSignUp(){
        this.router.navigate(['signup']);
    }
}