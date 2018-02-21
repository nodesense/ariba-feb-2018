import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power:3}} ==> 8
// 2 is value, 3 is exponent
// {{ 2 | power }} => 2

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  constructor() {
    console.log("Power pipe created");
  }

  transform(value: number, exponent: number = 1): number {
    console.log(" power ", value, exponent);
    return Math.pow(value, exponent);
  }

}
