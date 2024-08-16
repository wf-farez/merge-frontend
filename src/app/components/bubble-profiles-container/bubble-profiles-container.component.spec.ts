import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleProfilesContainerComponent } from './bubble-profiles-container.component';

describe('BubbleProfilesContainerComponent', () => {
  let component: BubbleProfilesContainerComponent;
  let fixture: ComponentFixture<BubbleProfilesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleProfilesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleProfilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
