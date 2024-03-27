import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyDisplayComponent } from './hobby-display.component';

describe('HobbyDisplayComponent', () => {
  let component: HobbyDisplayComponent;
  let fixture: ComponentFixture<HobbyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
