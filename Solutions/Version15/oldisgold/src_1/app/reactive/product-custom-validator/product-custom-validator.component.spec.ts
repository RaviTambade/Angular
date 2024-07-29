import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCustomValidatorComponent } from './product-custom-validator.component';

describe('ProductCustomValidatorComponent', () => {
  let component: ProductCustomValidatorComponent;
  let fixture: ComponentFixture<ProductCustomValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCustomValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
