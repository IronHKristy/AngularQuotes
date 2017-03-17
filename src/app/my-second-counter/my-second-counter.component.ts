import { Component, OnInit } from '@angular/core';
import { CounterService } from '../my-services/counter.service';

@Component({
  selector: 'app-my-second-counter',
  templateUrl: './my-second-counter.component.html',
  styleUrls: ['./my-second-counter.component.css'],
})
export class MySecondCounterComponent implements OnInit {

  constructor(private theCounter: CounterService) { }

  ngOnInit() {
  }

}
