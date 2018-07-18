import { Injectable} from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "~/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private auth : AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
        if(this.auth.isLoggedIn())
            return true;
        else{
            this.router.navigate(["/login"]);
        }
        return false;
    }
}