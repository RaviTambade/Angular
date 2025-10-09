import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  username = '';
  password = '';
  message = '';

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.message = '✅ Login successful!';
    } else {
      this.message = '❌ Invalid credentials';
    }
  }
}
