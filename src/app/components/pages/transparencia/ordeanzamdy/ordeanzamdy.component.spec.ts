import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdeanzamdyComponent } from './ordeanzamdy.component';

describe('OrdeanzamdyComponent', () => {
  let component: OrdeanzamdyComponent;
  let fixture: ComponentFixture<OrdeanzamdyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdeanzamdyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdeanzamdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
