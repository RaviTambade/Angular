import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAbstractComponent } from './product-abstract.component';

describe('ProductAbstractComponent', () => {
  let component: ProductAbstractComponent;
  let fixture: ComponentFixture<ProductAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
