import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosconseComponent } from './acuerdosconse.component';

describe('AcuerdosconseComponent', () => {
  let component: AcuerdosconseComponent;
  let fixture: ComponentFixture<AcuerdosconseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcuerdosconseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuerdosconseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
