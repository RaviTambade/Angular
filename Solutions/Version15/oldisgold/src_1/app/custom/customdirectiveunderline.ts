import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[tflUnderline]'
})
export class UnderlineDirective {
    constructor(private el: ElementRef,private renderer: Renderer,){}
    
    @HostListener('mouseenter') onMouseEnter() { this.hover(true); }
    @HostListener('mouseleave') onMouseLeave() { this.hover(false); }

    hover(shouldUnderline: boolean){
        if(shouldUnderline){  
        this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
        } else {         
        this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}