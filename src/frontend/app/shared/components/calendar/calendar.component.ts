import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter, CalendarEvent } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule,
  ],
  templateUrl: './calendar.component.html',
  providers: [
    {
      provide: DateAdapter,
      useFactory: adapterFactory,
    },
  ],
})
export class CalendarComponent {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
}
