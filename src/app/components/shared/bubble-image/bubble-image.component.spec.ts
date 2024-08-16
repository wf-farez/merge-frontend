import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleImageComponent } from './bubble-image.component';

describe('BubbleImageComponent', () => {
  let component: BubbleImageComponent;
  let fixture: ComponentFixture<BubbleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
