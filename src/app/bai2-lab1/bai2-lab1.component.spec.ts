import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2Lab1Component } from './bai2-lab1.component';

describe('Bai2Lab1Component', () => {
  let component: Bai2Lab1Component;
  let fixture: ComponentFixture<Bai2Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai2Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai2Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
