import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  result: number;

  // constructor(private dataService: DataService,
  //             @Inject('globalService') private globalSubject: Observable<any>,
  //             private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    // this.globalSubject
    // .subscribe ( (n) => {
    //   console.log("from outside ng", n);
    //   this.result  = n;
    //   this.changeDetectorRef.detectChanges();
    // });
  }

}
