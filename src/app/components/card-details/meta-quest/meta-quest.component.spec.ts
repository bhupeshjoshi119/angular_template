import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaQuestComponent } from './meta-quest.component';

describe('MetaQuestComponent', () => {
  let component: MetaQuestComponent;
  let fixture: ComponentFixture<MetaQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaQuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetaQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
