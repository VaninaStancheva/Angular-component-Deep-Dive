import {Component, output, ElementRef, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  add = output<{title:string, text:string}>();

  ngOnInit() {
    console.log(this.form?.nativeElement);
  }

  onSubmit(title:string, ticketText:string) {
    this.add.emit({title: title, text: ticketText});
    this.form?.nativeElement.reset();
  }
}
