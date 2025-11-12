import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estorespa';
  constructor(){ } 
}
