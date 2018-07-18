import {Injectable} from "@angular/core";
import {getString, setString, remove} from "application-settings";

@Injectable()
export class AuthService {
    constructor(){}

    isLoggedIn() : boolean{
        return AuthService.token != null
    }
    login(){
        AuthService.token = null;
    }
    static get token() : string{
        return getString("token");
    }
    static set token(token: string){
        if(token == null )
            remove("token");
        else
            setString("token",token);
    }
}