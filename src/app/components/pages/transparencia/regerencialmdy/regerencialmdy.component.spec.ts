import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegerencialmdyComponent } from './regerencialmdy.component';

describe('RegerencialmdyComponent', () => {
  let component: RegerencialmdyComponent;
  let fixture: ComponentFixture<RegerencialmdyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegerencialmdyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegerencialmdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
