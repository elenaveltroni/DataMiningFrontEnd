import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseResultComponent } from './phrase-result.component';

describe('PhraseResultComponent', () => {
  let component: PhraseResultComponent;
  let fixture: ComponentFixture<PhraseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
