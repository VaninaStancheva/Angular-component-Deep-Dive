import { Component } from '@angular/core';
import { DashboardFirstItemComponent } from './dashboard-first-item/dashboard-first-item.component';
import { DashboardSecondItemComponent } from './dashboard-second-item/dashboard-second-item.component';
import { DashboardThirdItemComponent } from "./dashboard-third-item/dashboard-third-item.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardFirstItemComponent, DashboardSecondItemComponent, DashboardThirdItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
