import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendTripComponent } from './weekend-trip.component';

describe('WeekendTripComponent', () => {
  let component: WeekendTripComponent;
  let fixture: ComponentFixture<WeekendTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekendTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekendTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
