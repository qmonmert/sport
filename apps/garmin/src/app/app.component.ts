import { Component } from '@angular/core';
import { User } from '@sport/activities';

@Component({
  selector: 'sport-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'garmin';

  user: User = {
    id: 1,
    firstname: 'Quentin',
    lastname: 'Monmert',
    city: 'Paris',
    country: 'France'
  };
}
