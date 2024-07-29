import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {
  ngOnInit() {
  }

  @ViewChild('canvas') canvasRef:ElementRef;
    private canvas: any;
    @Input('size') size: number;
    @Input('color') color: string;
    @Input('x1') x1: number;
    @Input('y1') y1: number;
    @Input('x2') x2: number;
    @Input('y2') y2: number;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    ngAfterViewInit() {
        this.canvas = this.canvasRef.nativeElement;
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.draw();
    }
    draw() {
        if (this.canvas.getContext) {
            let canvas = this.canvas;
            if (canvas.getContext){
                var ctx = canvas.getContext('2d');
                // ctx.fillStyle='white';
                // ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.beginPath();
                ctx.rect(this.x1,this.y1,this.x2,this.y2);
                ctx.strokeStyle = this.color;
                ctx.stroke();
            }
        }
    }
}
