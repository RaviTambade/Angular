import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAbstractEventComponent } from './product-abstract-event.component';

describe('ProductAbstractEventComponent', () => {
  let component: ProductAbstractEventComponent;
  let fixture: ComponentFixture<ProductAbstractEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAbstractEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAbstractEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
