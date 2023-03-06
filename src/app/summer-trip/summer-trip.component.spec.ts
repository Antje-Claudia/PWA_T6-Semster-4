import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerTripComponent } from './summer-trip.component';

describe('SummerTripComponent', () => {
  let component: SummerTripComponent;
  let fixture: ComponentFixture<SummerTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
