import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  show: boolean = true;

  aboutLikes: number = 10000;

  members: string[] = ['Krish',  'Karthi', 'Venkat'];
  

  constructor() { }

  ngOnInit() {
  }

}
