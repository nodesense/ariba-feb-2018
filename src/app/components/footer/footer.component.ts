import { Component, OnInit,
         Input,

         Output, EventEmitter

} from '@angular/core';
import { DataService } from '../../shared/services/data.service';


import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Input allows to accept parameter from parent

  @Input()
  title: string;

  @Input()
  year: number;

  @Input()
  addr: any;

  // $ conventional, async
  pageViews$ : Observable<number>;
  
  // event binding
  // through event emitter ONLY
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();

  constructor(private dataService: DataService) {
       this.pageViews$ = this.dataService.pageViewsSource;

   }

  ngOnInit() {
     console.log('year type ', typeof this.year);
      

  }

  contact() {
      // emit/publish message, rxjs
      // MAX 1 parameter == received as $event
      this.contactEvent.emit(this.addr);
  }

}
