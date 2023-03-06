import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiTourComponent } from './ski-tour.component';

describe('SkiTourComponent', () => {
  let component: SkiTourComponent;
  let fixture: ComponentFixture<SkiTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
