import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[tflUnderline]'
})
export class UnderlineDirective {
    constructor(private el: ElementRef,private renderer: Renderer2){}
    
    @HostListener('mouseenter') onMouseEnter() { this.hover(true); }
    @HostListener('mouseleave') onMouseLeave() { this.hover(false); }

    hover(shouldUnderline: boolean){
        console.log("hover effect");
        console.log("should underline :" +shouldUnderline);
        if(shouldUnderline){  
        
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
        } else {         
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}