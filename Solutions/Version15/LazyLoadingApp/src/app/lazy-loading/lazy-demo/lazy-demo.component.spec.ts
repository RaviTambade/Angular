import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDemoComponent } from './lazy-demo.component';

describe('LazyDemoComponent', () => {
  let component: LazyDemoComponent;
  let fixture: ComponentFixture<LazyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
