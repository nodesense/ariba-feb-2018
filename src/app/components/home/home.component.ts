import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number = 0;
  show: boolean = true;

  pageViews: number;

  constructor(private dataService: DataService) {
      console.log('Home comp created');
   }

  ngOnInit() {
     //this.pageViews = this.dataService.pageViews;

     // subscribe
     this.dataService.pageViewsSource
     .subscribe ( (n) => {
       console.log("home subs ", n);
       this.pageViews = n;
        // n carries value from next(10)
     });

  }

  incrementPageView() {
    this.dataService.increment();
    // bad, pull model
    // this.pageViews = this.dataService.pageViews;
  }

  incr(event: Event, step: number) {
    console.log("Event ", event);
    this.counter = this.counter + step;
     
  }

}
