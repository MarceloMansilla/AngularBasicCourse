import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularBasicProject';
  progress = 0;
  totalCountdown = 15;

  constructor() { }

  updateProgress($event) {
    this.progress = (this.totalCountdown - $event) / this.totalCountdown * 100;
  }

  countdownFinished() {
    console.log('countdown has finished');
  }
}
