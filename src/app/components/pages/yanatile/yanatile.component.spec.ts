import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanatileComponent } from './yanatile.component';

describe('YanatileComponent', () => {
  let component: YanatileComponent;
  let fixture: ComponentFixture<YanatileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YanatileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanatileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
