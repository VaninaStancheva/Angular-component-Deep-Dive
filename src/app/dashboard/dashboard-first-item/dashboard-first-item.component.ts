import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-first-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-first-item.component.html',
  styleUrl: './dashboard-first-item.component.css'
})
export class DashboardFirstItemComponent {
  currentStatus = 'online';
}
