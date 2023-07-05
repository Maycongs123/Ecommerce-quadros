import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrameComponent } from './card-frame.component';

describe('CardFrameComponent', () => {
  let component: CardFrameComponent;
  let fixture: ComponentFixture<CardFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFrameComponent]
    });
    fixture = TestBed.createComponent(CardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
