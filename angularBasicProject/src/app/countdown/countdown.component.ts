import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDecrease = new EventEmitter<number>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComplete = new EventEmitter<void>();
  @Input() init = null;
  counter = 0;
  private countdownTimeReference: any = null;

  constructor() { }

  ngOnInit(): void  {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimerReference();
  }

  ngOnChanges(changes): void {
    console.log('init value updated to: ', changes.init.currentValue);
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimerReference();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimeReference =
    setTimeout(() => {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
        this.processCountdown();
      }
    }, 1000
    );
  }

  private clearTimerReference() {
    if (this.countdownTimeReference) {
      this.countdownTimeReference = null;
    }
  }

  processCountdown() {
    this.onDecrease.emit(this.counter);
    console.log('count is ', this.counter);

    if (this.counter === 0) {
      this.onComplete.emit();
      console.log('--counter end--');
    } else {
      this.doCountdown();
    }
  }


}
