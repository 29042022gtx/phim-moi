import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai9Lab1Component } from './bai9-lab1.component';

describe('Bai9Lab1Component', () => {
  let component: Bai9Lab1Component;
  let fixture: ComponentFixture<Bai9Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai9Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai9Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
