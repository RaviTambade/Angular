import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule]
  ,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

}
