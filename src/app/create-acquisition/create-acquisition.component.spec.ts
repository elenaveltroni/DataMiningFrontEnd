import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcquisitionComponent } from './create-acquisition.component';

describe('CreateAcquisitionComponent', () => {
  let component: CreateAcquisitionComponent;
  let fixture: ComponentFixture<CreateAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
