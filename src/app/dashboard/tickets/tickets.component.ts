import {Component, output} from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import {NewTicketComponent} from "./new-ticket/new-ticket.component";
import {Ticket} from "./ticket/ticket.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd (ticketData: {title:string; text:string}) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }
    this.tickets.push(ticket);
  }
}
