import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
//import { LikeComponent } from '../../shared/components/like/like.component';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ AboutComponent,
                     // LikeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const element: any = fixture.nativeElement;

    expect(element.querySelectorAll('li').length).toBe(3);
  
    expect(element.querySelectorAll('li')[2].textContent)
          .toContain("Venkat");

    expect(element.querySelectorAll('li')[1].textContent)
          .toContain("Karthi");

  });

  it('should create', () => {
    expect(component).toBeTruthy();

    component.show = false;

    fixture.detectChanges();

    const element: any = fixture.nativeElement;


    expect(element.querySelectorAll('ul').length).toBe(0);
    expect(element.querySelectorAll('li').length).toBe(0);
   

  });
});
