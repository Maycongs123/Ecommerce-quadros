import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSizeComponent } from './card-size.component';

describe('CardSizeComponent', () => {
  let component: CardSizeComponent;
  let fixture: ComponentFixture<CardSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSizeComponent]
    });
    fixture = TestBed.createComponent(CardSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
