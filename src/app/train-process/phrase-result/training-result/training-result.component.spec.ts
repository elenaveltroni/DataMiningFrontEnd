import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingResultComponent } from './training-result.component';

describe('TrainingResultComponent', () => {
  let component: TrainingResultComponent;
  let fixture: ComponentFixture<TrainingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
