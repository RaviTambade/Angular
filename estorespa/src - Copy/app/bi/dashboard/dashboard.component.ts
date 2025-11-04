import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [RouterModule, RouterOutlet, RouterLink]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
