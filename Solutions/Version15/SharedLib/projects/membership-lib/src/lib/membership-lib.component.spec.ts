import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipLibComponent } from './membership-lib.component';

describe('MembershipLibComponent', () => {
  let component: MembershipLibComponent;
  let fixture: ComponentFixture<MembershipLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
