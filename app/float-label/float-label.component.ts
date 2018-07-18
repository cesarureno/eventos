import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Color } from "tns-core-modules/color";

@Component({
    selector: "FloatLabel",
    moduleId: module.id,
    styles:[`
        .texfield:{
            border-bottom-width: 1;
            border-bottom-color: #f6f6f9;
            padding: 2;
            margin-right: 22;
        }
    `],
    template: `
        <GridLayout rows="30, auto" marginBottom="5">
            <Label #label row="1" [text]="placeholder" opacity="0.4" fontSize="14"  class="input"></Label>
            <TextField #textField 
                       class="texfield" 
                       [secure]="secure" 
                       [keyboardType]="keyboardType"
                       [autocapitalizationType]="autocapitalizationType"
                       [returnKeyType]="returnKeyType"
                       row="1"  
                       (focus)="onFocus()" (blur)="onBlur()"></TextField>
            <Image row="1" col="1" horizontalAlignment="right" [src]="icon" width="24" height="24"></Image>
        </GridLayout>
    `
})
export class FloatLabel {
    @Input() placeholder: string;
    @Input() secure: boolean;
    @Input() keyboardType: "text";
    @Input() returnKeyType: "next";
    @ViewChild("label") label: ElementRef;
    @ViewChild("textField") textField: ElementRef;
    @Input() icon : string;

    constructor() {
    }

    ngOnInit(): void {
    }

    onFocus() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1,
        }).then(() => { }, () => { });

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color('#f59b17');
    }

    onBlur() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(() => { }, () => { });
        }
        // reset border bottom color.
        textField.borderBottomColor = new Color('#cec8c8');
    }
}
