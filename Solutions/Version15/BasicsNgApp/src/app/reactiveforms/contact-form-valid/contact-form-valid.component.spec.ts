import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormValidComponent } from './contact-form-valid.component';

describe('ContactFormValidComponent', () => {
  let component: ContactFormValidComponent;
  let fixture: ComponentFixture<ContactFormValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormValidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
