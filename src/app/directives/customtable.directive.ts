
import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector:'[customtable]'
})
export class CustomTableDirective implements OnInit{

    constructor(private el:ElementRef){
       //this.el.nativeElement.outerHTML = "<table><tr><td>1</td><td>1</td></tr></table>";
    };

    ngOnInit(){
        
    };
};