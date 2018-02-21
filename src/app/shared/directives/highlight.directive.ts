import { Directive,
         OnInit,
         OnDestroy,

         ElementRef,
         HostListener, // event lisener

         Input,

         Renderer, // abstraction over DOM APIs
} from '@angular/core';

// no HTML
// no styles
// attribute level <p appHighlight />
// p is called host element

@Directive({
  selector: '[appHighlight]', //Must have []
  exportAs: 'appHighlight' // directive instance is exposed
})
export class HighlightDirective implements OnInit, OnDestroy {
  // angular inject host element in cons
 
  @Input()
  color: string;

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer) { 
    console.log('highlight directive created');
  }

  ngOnInit() {
    console.log("highlight init");

    this.color = this.color || 'lightgreen';
    
    //this.setColor('green');

  }

  ngOnDestroy() {
    console.log('highlight destory')
  }

  setColor(color: string) {
     this.renderer.setElementStyle(
        this.hostElement.nativeElement, 
        "background",
        color
     );
  }

  @HostListener('mouseenter')
  onMouseEnter() {
     this.setColor(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setColor('');
  }

  // to be called by outside directive
  sayHello() {
    alert(this.color);
  }

}
