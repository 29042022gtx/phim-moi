import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai4Lab1Component } from './bai4-lab1.component';

describe('Bai4Lab1Component', () => {
  let component: Bai4Lab1Component;
  let fixture: ComponentFixture<Bai4Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai4Lab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai4Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
