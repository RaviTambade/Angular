import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderYearComponent } from './calender.component';

describe('CalenderYearYearComponent', () => {
  let component: CalenderYearComponent;
  let fixture: ComponentFixture<CalenderYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
