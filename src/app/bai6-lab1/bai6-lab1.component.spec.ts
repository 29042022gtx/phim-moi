import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai6Lab1Component } from './bai6-lab1.component';

describe('Bai6Lab1Component', () => {
  let component: Bai6Lab1Component;
  let fixture: ComponentFixture<Bai6Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai6Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai6Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
