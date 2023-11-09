import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleLibComponent } from './role-lib.component';

describe('RoleLibComponent', () => {
  let component: RoleLibComponent;
  let fixture: ComponentFixture<RoleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
