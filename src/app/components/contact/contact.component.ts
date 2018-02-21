import { Component, OnInit,

         ViewChild,
         ElementRef
} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // accessing dom element in component

  // #inp1
  @ViewChild("inp1")
  inputElement: ElementRef;

  @ViewChild("para1")
  pElement: ElementRef;

  // undefined
  address: any; //{city: 'BLR'}

  // type inference, 
  // typescript declare based on init value
  title  = 'Contact';
  price  = 99.99; // number type
  
  date: Date = new Date();
 
  constructor() {
   
   }

  ngOnInit() {

     
    this.inputElement.nativeElement.focus();
    this.pElement.nativeElement.textContent='NG';
 
    setTimeout( () =>  {
        console.log("timeout called");
        this.address = {city: 'BLR'};
    }, 3000);
  }
}
