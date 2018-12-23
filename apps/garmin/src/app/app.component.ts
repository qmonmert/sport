import { Component } from '@angular/core';
import { User } from '@sport/activities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'sport-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'garmin';

  user: Observable<User>;

  constructor(private http: HttpClient) {
    this.user = this.http.get<User>('http://localhost:3333/');
  }
}
