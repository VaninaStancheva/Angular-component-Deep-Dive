import { Component } from '@angular/core';
import { DashboardItemComponent } from '../../shared/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
