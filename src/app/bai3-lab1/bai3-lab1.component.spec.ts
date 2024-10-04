import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai3Lab1Component } from './bai3-lab1.component';

describe('Bai3Lab1Component', () => {
  let component: Bai3Lab1Component;
  let fixture: ComponentFixture<Bai3Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai3Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai3Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
