import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai11Lab1Component } from './bai11-lab1.component';

describe('Bai11Lab1Component', () => {
  let component: Bai11Lab1Component;
  let fixture: ComponentFixture<Bai11Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai11Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai11Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
