import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';

// holds last known value
// calls subscribe automatically
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

// Business logic
// communication logic (web service)
// share data amoung components 
@Injectable()
export class DataService {

  pageViews: number = 1000;

  pageViewsSource: BehaviorSubject<number> = new BehaviorSubject(1000);

  constructor() { 
    console.log("Data service created");
  }

  increment() {
    this.pageViews++;
    // publish
    this.pageViewsSource.next(this.pageViews);
  }

}
