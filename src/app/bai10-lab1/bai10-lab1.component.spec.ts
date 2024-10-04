import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai10Lab1Component } from './bai10-lab1.component';

describe('Bai10Lab1Component', () => {
  let component: Bai10Lab1Component;
  let fixture: ComponentFixture<Bai10Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai10Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai10Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
