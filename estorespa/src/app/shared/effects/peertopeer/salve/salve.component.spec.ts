import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalveComponent } from './salve.component';

describe('SalveComponent', () => {
  let component: SalveComponent;
  let fixture: ComponentFixture<SalveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
