import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogLoginComponent } from './catalog-login.component';

describe('CatalogLoginComponent', () => {
  let component: CatalogLoginComponent;
  let fixture: ComponentFixture<CatalogLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
