import { Component, ViewChild } from '@angular/core';
import { TodayComponent } from './components/today/today.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
}
