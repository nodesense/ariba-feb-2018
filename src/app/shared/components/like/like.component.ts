import { Component, 
         OnInit,
         OnDestroy,
      
         Input,
         Output, EventEmitter 
      
      } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit, OnDestroy {
  //TWO WAY BIDNING [Input] (Output)

  @Input()
  likes: number;

  // output name should be input name + "Change"
  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();

  constructor() { 
    console.log("Like comp created");
  }

  ngOnInit() {
    console.log("Like comp init");
  }

  // called just before deleting component
  ngOnDestroy() {
    console.log("Like comp destroy");
  }

  up() {
     
    //window.subject.next(Math.random());

    this.likesChange.emit ( this.likes + 1);
  }

}
