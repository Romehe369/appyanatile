import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionamdyComponent } from './resolucionamdy.component';

describe('ResolucionamdyComponent', () => {
  let component: ResolucionamdyComponent;
  let fixture: ComponentFixture<ResolucionamdyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolucionamdyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolucionamdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
