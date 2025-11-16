import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsEcomComponent } from './card-details-ecom.component';

describe('CardDetailsEcomComponent', () => {
  let component: CardDetailsEcomComponent;
  let fixture: ComponentFixture<CardDetailsEcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailsEcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDetailsEcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
