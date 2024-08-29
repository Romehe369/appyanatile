import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpobladosComponent } from './cpoblados.component';

describe('CpobladosComponent', () => {
  let component: CpobladosComponent;
  let fixture: ComponentFixture<CpobladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpobladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpobladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
