import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count: Number = 0;
  constructor() { }

  increment() {
    this.count++;
    console.log(`Count is now ${this.count}`);
  }

}
