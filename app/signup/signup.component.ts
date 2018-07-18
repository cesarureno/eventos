import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
    styleUrls: ['../login/login.component.css']
})
export class SignupComponent {
    email : string;
    password : string;
    passwordConfirmation : string;
    error : string;
    processing = false;

    constructor(private page: Page, private router : Router) {
        this.page.actionBarHidden = true;
    }

    signUp(){
        if(this.password != this.passwordConfirmation)
            return this.error = "No coinciden las contraseñas";

        this.processing = true;

        firebase.createUser({
            email: this.email,
            password: this.password,
        }).then( result => {
            console.log("Resultado de la autenticación "+ JSON.stringify(result));
            this.processing = false;
        }).catch(err => {
            this.error = JSON.stringify(err);
            this.processing = false;
        });
    }
    goToLogin(){
        this.router.navigate(['login']);
    }
}