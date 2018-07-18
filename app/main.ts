// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");
import {AuthService} from "~/services/auth.service";

import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

firebase.init({
    persist: false,
}).then(() => console.log("Firebase inicializado"))
    .catch(err => console.log(err));

firebase.addAuthStateListener({
    onAuthStateChanged: (data : any) => {
        console.log("LOGIN DATA: "+JSON.stringify(data));
        if(data.loggedIn){
            AuthService.token = data.user.uid;
        }
        else{
            AuthService.token = null;
        }
    }
});

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
