import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenButtonComponent } from './fullscreen-button.component';

describe('FullscreenButtonComponent', () => {
  let component: FullscreenButtonComponent;
  let fixture: ComponentFixture<FullscreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
