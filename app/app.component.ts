import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RadSideDrawerComponent, SideDrawerType} from "nativescript-ui-sidedrawer/angular";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _drawer: SideDrawerType;

    constructor(private _changeDetectionRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        //fairly certain this statement is never entered
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public openDrawer() {
        console.log("Drawer method reached");
        console.log(this._drawer); //returns undefined
        this._drawer.toggleDrawerState();
    }
}
