import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "~/login/login.component";
import { SignupComponent } from "~/signup/signup.component";
import {HomeComponent} from "~/home/home.component";
import {AuthGuard} from "~/guards/auth.guard";

const routes: Routes = [
    { path: "", canActivate: [AuthGuard], component: HomeComponent},
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }