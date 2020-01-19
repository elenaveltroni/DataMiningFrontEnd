import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainProcessComponent } from './train-process.component';

describe('TrainProcessComponent', () => {
  let component: TrainProcessComponent;
  let fixture: ComponentFixture<TrainProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
