import { Component, Input, OnInit } from '@angular/core';

interface TimerValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  @Input() endDate!: Date;
  timerValues: TimerValues = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  private timerInterval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private startTimer() {
    this.updateTimer();
    this.timerInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  private updateTimer() {
    const now = new Date().getTime();
    const distance = this.endDate.getTime() - now;

    if (distance <= 0) {
      clearInterval(this.timerInterval);
      return;
    }

    this.timerValues = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0'),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0'),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0'),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0'),
    };
  }
}
